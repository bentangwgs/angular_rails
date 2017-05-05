class CreateTwits < ActiveRecord::Migration
  def change
    create_table :twits do |t|
      t.string :twit
      t.timestamps null: false
    end
  end
end
