module Erp::Hkstore
  class Menu < ApplicationRecord
    self.table_name = "categories"
    
    def self.get_data
      self.all.order("created_at desc")
    end
  end
end
