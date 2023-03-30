class InformationController < AssetsController

  def show
    respond_to :pdf
    begin
      file_path = find_file! params[:name], request.format.symbol, 'information'
      send_file file_path
    rescue
      head :not_acceptable
    end
  end

end
