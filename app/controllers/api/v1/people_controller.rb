class Api::V1::PeopleController < Api::V1::BaseController
  def index
    response = People.all
    render json: response.body, status: response.code
  end
end
