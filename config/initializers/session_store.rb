# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_TechRadar_session',
  :secret      => 'f3914c11673992bf424d39cedb8a77973fea2d1ac6627c06255fde61e9cdbf9d34b7aa49b7dbf7ada4f0b7b2ae4af34b36cfd13cd450094b60ee02a57f2cf0fd'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
