defmodule RestfulCars.CarsTest do
  use RestfulCars.DataCase

  alias RestfulCars.Cars

  describe "cars" do
    alias RestfulCars.Cars.Car

    @valid_attrs %{color: "some color", make: "some make", model: "some model", year: 42}
    @update_attrs %{color: "some updated color", make: "some updated make", model: "some updated model", year: 43}
    @invalid_attrs %{color: nil, make: nil, model: nil, year: nil}

    def car_fixture(attrs \\ %{}) do
      {:ok, car} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Cars.create_car()

      car
    end

    test "list_cars/0 returns all cars" do
      car = car_fixture()
      assert Cars.list_cars() == [car]
    end

    test "get_car!/1 returns the car with given id" do
      car = car_fixture()
      assert Cars.get_car!(car.id) == car
    end

    test "create_car/1 with valid data creates a car" do
      assert {:ok, %Car{} = car} = Cars.create_car(@valid_attrs)
      assert car.color == "some color"
      assert car.make == "some make"
      assert car.model == "some model"
      assert car.year == 42
    end

    test "create_car/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Cars.create_car(@invalid_attrs)
    end

    test "update_car/2 with valid data updates the car" do
      car = car_fixture()
      assert {:ok, car} = Cars.update_car(car, @update_attrs)
      assert %Car{} = car
      assert car.color == "some updated color"
      assert car.make == "some updated make"
      assert car.model == "some updated model"
      assert car.year == 43
    end

    test "update_car/2 with invalid data returns error changeset" do
      car = car_fixture()
      assert {:error, %Ecto.Changeset{}} = Cars.update_car(car, @invalid_attrs)
      assert car == Cars.get_car!(car.id)
    end

    test "delete_car/1 deletes the car" do
      car = car_fixture()
      assert {:ok, %Car{}} = Cars.delete_car(car)
      assert_raise Ecto.NoResultsError, fn -> Cars.get_car!(car.id) end
    end

    test "change_car/1 returns a car changeset" do
      car = car_fixture()
      assert %Ecto.Changeset{} = Cars.change_car(car)
    end
  end
end
