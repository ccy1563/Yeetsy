class AddCategoryToProduct < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :category, :text, array: true, default: []
  end
end
