defmodule RestfulCarsWeb.PageController do
  use RestfulCarsWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
