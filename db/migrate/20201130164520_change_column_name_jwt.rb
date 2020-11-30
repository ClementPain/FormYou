class ChangeColumnNameJwt < ActiveRecord::Migration[6.0]
  def self.up
    rename_column :jwt_denylist, :expired_at, :exp
  end

  def self.down
    rename_column :jwt_denylist, :exp, :expired_at
  end
end
