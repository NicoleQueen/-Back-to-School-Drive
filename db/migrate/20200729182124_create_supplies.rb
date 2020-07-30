class CreateSupplies < ActiveRecord::Migration[6.0]
  def change
    create_table :supplies do |t|
      t.string :supply
      t.integer :amount
      t.integer :school_id
    end
  end
end
