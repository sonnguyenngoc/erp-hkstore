class CreateErpHkstoreProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :erp_hkstore_products do |t|

      t.timestamps
    end
  end
end
