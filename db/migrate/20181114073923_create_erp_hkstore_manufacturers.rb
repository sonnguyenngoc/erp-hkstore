class CreateErpHkstoreManufacturers < ActiveRecord::Migration[5.1]
  def change
    create_table :erp_hkstore_manufacturers do |t|

      t.timestamps
    end
  end
end
