class CreateUserTodos < ActiveRecord::Migration
  def change
    create_table :user_todos do |t|
      t.string :title
      t.text :description
      t.boolean :completed
      t.integer :order

      t.timestamps
    end
  end
end
