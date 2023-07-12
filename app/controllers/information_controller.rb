class InformationController < AssetsController

  def show
    respond_to :doc
    begin
      file_path = find_file! params[:name], 'docx', 'information'
      #request.format.symbol, 
      send_file file_path
    rescue
      head :not_acceptable
    end
  end

end
