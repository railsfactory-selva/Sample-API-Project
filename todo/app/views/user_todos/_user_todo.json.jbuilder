json.extract! user_todo, :id, :title, :description, :completed, :order, :created_at, :updated_at
json.url user_todo_url(user_todo, format: :json)
