class CreateErpHkstoreCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :erp_hkstore_categories do |t|

      t.timestamps
    end
  end
end
