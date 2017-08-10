defmodule RestfulCars.Cars.Car do
  use Ecto.Schema
  import Ecto.Changeset
  alias RestfulCars.Cars.Car


  schema "cars" do
    field :color, :string
    field :make, :string
    field :model, :string
    field :year, :integer

    timestamps()
  end

  @doc false
  def changeset(%Car{} = car, attrs) do
    car
    |> cast(attrs, [:color, :make, :model, :year])
    |> validate_required([:color, :make, :model, :year])
  end
end
