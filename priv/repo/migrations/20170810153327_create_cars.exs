defmodule RestfulCars.Repo.Migrations.CreateCars do
  use Ecto.Migration

  def change do
    create table(:cars) do
      add :color, :string
      add :make, :string
      add :model, :string
      add :year, :integer

      timestamps()
    end

  end
end
