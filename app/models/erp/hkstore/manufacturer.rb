module Erp::Hkstore
  class Manufacturer < ApplicationRecord
    self.table_name = "manufacturers"
    
    def self.get_data
      self.all.order("created_at desc")
    end
  end
end
