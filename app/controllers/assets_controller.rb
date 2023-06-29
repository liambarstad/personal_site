class AssetsController < ApplicationController

  protected

    def find_file!(file_name, extension, folder)
      asset_files = Dir.entries Rails.root.join('app', 'assets', folder)
      valid_asset_files = asset_files.select {|f| not f[0] == '.'}
      if valid_asset_files.include? "#{file_name}.#{extension}"
        valid_asset_in_dir = valid_asset_files.find {|f| f == "#{file_name}.#{extension}"}
        Rails.root.join('app', 'assets', folder, valid_asset_in_dir)
      else
        raise StandardError.new 'not in dir'
      end
    end

end
