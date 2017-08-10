use Mix.Config

# In this file, we keep production configuration that
# you'll likely want to automate and keep away from
# your version control system.
#
# You should document the content of this
# file or create a script for recreating it, since it's
# kept out of version control and might be hard to recover
# or recreate for your teammates (or yourself later on).
config :restful_cars, RestfulCarsWeb.Endpoint,
  secret_key_base: "8Ig52rJz2deuJ57tmrOknv+vd82AolFEWjBKLR1Pfy35ic1I8Bpsp9LQvbhaVm2F"

# Configure your database
config :restful_cars, RestfulCars.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "restful_cars_prod",
  pool_size: 15
