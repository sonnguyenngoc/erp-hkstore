module Erp::Hkstore
  class Product < ApplicationRecord    
    self.table_name = "products"
    has_and_belongs_to_many :categories
    belongs_to :manufacturer
    
    after_create :create_alias
    def create_alias
      name = self.cache_display_name
      self.update_column(:alias, name.unaccent.downcase.to_s.gsub(/[^0-9a-z ]/i, '').gsub(/ +/i, '-').strip)
    end
    
    def self.search(params)
      query = self.where("products.status=1").where("products.in_use=true")
                  .order("products.created_at desc")
      
      return query
    end
    
    def self.get_data
      query = self.where("products.status=1").where("products.in_use=true")
                  .order("products.created_at desc")
      
      return query
    end
    
    def self.dataselect(keyword='')
      query = self.all

      if keyword.present?
        keyword = keyword.strip.downcase
        query = query.where('LOWER(name) LIKE ?', "%#{keyword}%")
      end

      query = query.limit(8).map{|product| {value: product.id, text: product.get_name} }
    end
    
    def get_alias
      self.alias
    end
    
    def get_price
      self.cache_price.to_i
    end
    
    def get_name
      self.cache_display_name.to_s
    end
    
    def display_thcn_long_properties
      JSON.parse(cache_thcn_properties)["long"]
    end
  
    def display_thcn_short_properties
      JSON.parse(cache_thcn_properties)["short"]
    end
  end
end
