class ChangeUserColumn2 < ActiveRecord::Migration[6.1]
  def change
    remove_column(:users, :username)
  end
end
