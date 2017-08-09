# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
UserTodo.create(title: 'Clone Rails Repo', description: 'To use as API on Node Repo', completed: 0, order: 1)
UserTodo.create(title: 'Crate Node Repo', description: 'To use as Backend', completed: 0, order: 2)
UserTodo.create(title: 'Install Dependencies', description: 'To run Node Repo', completed: 0, order: 3)
UserTodo.create(title: 'Write Marko', description: 'To render something on the page', completed: 0, order: 4)
UserTodo.create(title: 'Run', description: 'Call API from Node via Marko', completed: 0, order: 5)

