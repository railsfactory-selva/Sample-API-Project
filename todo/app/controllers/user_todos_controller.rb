class UserTodosController < ApplicationController
  before_action :set_user_todo, only: [:show, :edit, :update, :destroy]

  # GET /user_todos
  # GET /user_todos.json
  def index
    @user_todos = UserTodo.all
  end

  # GET /user_todos/1
  # GET /user_todos/1.json
  def show
  end

  # GET /user_todos/new
  def new
    @user_todo = UserTodo.new
  end

  # GET /user_todos/1/edit
  def edit
  end

  # POST /user_todos
  # POST /user_todos.json
  def create
    @user_todo = UserTodo.new(user_todo_params)

    respond_to do |format|
      if @user_todo.save
        format.html { redirect_to @user_todo, notice: 'User todo was successfully created.' }
        format.json { render :show, status: :created, location: @user_todo }
      else
        format.html { render :new }
        format.json { render json: @user_todo.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /user_todos/1
  # PATCH/PUT /user_todos/1.json
  def update
    respond_to do |format|
      if @user_todo.update(user_todo_params)
        format.html { redirect_to @user_todo, notice: 'User todo was successfully updated.' }
        format.json { render :show, status: :ok, location: @user_todo }
      else
        format.html { render :edit }
        format.json { render json: @user_todo.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /user_todos/1
  # DELETE /user_todos/1.json
  def destroy
    @user_todo.destroy
    respond_to do |format|
      format.html { redirect_to user_todos_url, notice: 'User todo was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_todo
      @user_todo = UserTodo.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_todo_params
      params.require(:user_todo).permit(:title, :description, :completed, :order)
    end
end
