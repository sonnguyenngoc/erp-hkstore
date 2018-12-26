module Erp::Hkstore
  class Category < ApplicationRecord
    self.table_name = "categories"
    has_and_belongs_to_many :products
    has_and_belongs_to_many :menus    
    
    def self.get_data
      self.all.order("created_at desc")
    end
  end
end
