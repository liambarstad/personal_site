class MailController < ApplicationController

  def create
    begin
      send_mail!
    rescue ArgumentError
      render json: { success: false, message: 'Email could not be processed' }, status: 406 
    rescue 
      render json: { success: false, message: 'An Unexpected Error has Occurred' }, status: 500
    end
  end

  private
    
    def send_mail!
      check_params_validity!
      InquiriesMailer
        .inquire(
          email: @inquiry_params[:email],
          organization: @inquiry_params[:organization],
          title: @inquiry_params[:title],
          message: @inquiry_params[:message],
          attached_resources: format_attachments
        ).deliver_later
      render json: { success: true }, head: :ok
    end

    def format_attachments
      if @inquiry_params[:attachments]
        @inquiry_params[:attachments].values.map do |attachment|
          attachment.tempfile = attachment.tempfile.read
          attachment.instance_values
        end
      else 
        []
      end
    end

    def check_params_validity!
      @inquiry_params = params.require(:inquiry).permit(:email, :title, :organization, :message, attachments: {})
      check_info_validity!
      check_attachments_validity!
    end

    def check_info_validity!
      if not @inquiry_params[:email] or
          not @inquiry_params[:organization] or
          not @inquiry_params[:title] or @inquiry_params[:title].length == 0 or
          not @inquiry_params[:message] or @inquiry_params[:message].length == 0 or
          not /^[\w-]{1,}@[\w-]{1,}\.[\w]{2,5}$/.match? @inquiry_params[:email]
        raise ArgumentError
      end
    end

    def check_attachments_validity!
      attachments = @inquiry_params[:attachments]
      if attachments and (
          attachments.values.length > 4 or 
          attachments.values.any? {|a| a.size > 50000000}
      )
        raise ArgumentError
      end
    end

end
