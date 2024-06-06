class ImagesController < AssetsController

  def show 
    respond_to :jpg, :jpeg, :png, :ico
    begin
      extension = request.format == 'jpeg' ? 'jpg' : request.format.symbol.to_s ;
      file_path = find_file! sanitize_name(params[:name]), extension, 'images'
      send_file file_path, type: "image/#{extension}", disposition: 'inline'
    rescue
      head :not_acceptable
    end
  end

  private

    def sanitize_name(name)
      name.gsub(/[^0-9A-z\-]/, '_')
    end

end
