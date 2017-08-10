defmodule RestfulCarsWeb.CarView do
  use RestfulCarsWeb, :view
  alias RestfulCarsWeb.CarView

  def render("index.json", %{cars: cars}) do
    %{data: render_many(cars, CarView, "car.json")}
  end

  def render("show.json", %{car: car}) do
    %{data: render_one(car, CarView, "car.json")}
  end

  def render("car.json", %{car: car}) do
    %{id: car.id,
      color: car.color,
      make: car.make,
      model: car.model,
      year: car.year}
  end
end
