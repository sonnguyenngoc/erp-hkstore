module Erp::Hkstore
  class Menu < ApplicationRecord
    self.table_name = "menus"
    belongs_to :category
    has_many :categories_menus
    has_and_belongs_to_many :categories
    
    def self.get_main_menu
      self.where(level: 1).order("created_at asc")
    end
    
    def self.get_data
      self.all.order("created_at desc")
    end
    
    after_create :create_alias
    def create_alias
      name = self.title
      self.update_column(:name_url, name.unaccent.downcase.to_s.gsub(/[^0-9a-z ]/i, '').gsub(/ +/i, '-').strip)
    end
    
    after_save :update_cache_category_ids
    def update_cache_category_ids
      arr = []
      self.categories.each do |i|
          arr += i.get_all_related_ids
      end
      self.update_column(:cache_category_ids, arr.to_json)
    end
    
    def get_products_for_categories(params)
      menu = Menu.find(params[:id])
      records = Product.get_data.joins(:categories)
                        .where(categories: {id: menu.get_all_category_ids})
      
      return records
    end
    
    def get_all_category_ids      
      return cache_category_ids.present? ? JSON.parse(self.cache_category_ids) : []
    end    
  end
end