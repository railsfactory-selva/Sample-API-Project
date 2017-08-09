require 'test_helper'

class UserTodosControllerTest < ActionController::TestCase
  setup do
    @user_todo = user_todos(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:user_todos)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create user_todo" do
    assert_difference('UserTodo.count') do
      post :create, user_todo: { completed: @user_todo.completed, description: @user_todo.description, order: @user_todo.order, title: @user_todo.title }
    end

    assert_redirected_to user_todo_path(assigns(:user_todo))
  end

  test "should show user_todo" do
    get :show, id: @user_todo
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @user_todo
    assert_response :success
  end

  test "should update user_todo" do
    patch :update, id: @user_todo, user_todo: { completed: @user_todo.completed, description: @user_todo.description, order: @user_todo.order, title: @user_todo.title }
    assert_redirected_to user_todo_path(assigns(:user_todo))
  end

  test "should destroy user_todo" do
    assert_difference('UserTodo.count', -1) do
      delete :destroy, id: @user_todo
    end

    assert_redirected_to user_todos_path
  end
end
