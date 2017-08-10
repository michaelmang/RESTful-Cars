# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :restful_cars,
  ecto_repos: [RestfulCars.Repo]

# Configures the endpoint
config :restful_cars, RestfulCarsWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "nghZKvwYfkURY7LBoqIv0gWKZGpCTs7dJ2RrRbilu7DbkOnA1udxxmbLkYUzIaCN",
  render_errors: [view: RestfulCarsWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: RestfulCars.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
