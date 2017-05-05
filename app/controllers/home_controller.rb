class HomeController < ApplicationController
  def index; end
  def get_twits
    twits = Twit.all
    render json: twits
  end

  def create_twit
    twit = Twit.create(twit: params[:twit])
    render json: twit
  end

  def delete_twits
    twit = Twit.find(params[:id])
    twit.destroy
    render json: twit
  end
end