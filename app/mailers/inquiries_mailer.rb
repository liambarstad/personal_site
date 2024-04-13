class InquiriesMailer < ApplicationMailer
  default to: ENV['INQUIRY_EMAIL_RECIPIENT']

  def inquire(email:, name:, message:, organization:, attached_resources: [])
    add_attachments attached_resources
    @email = email
    @name = name
    @organization = organization
    @message = message
    mail reply_to: email, subject: "Resume Inquiry from #{name} - #{organization}"
  end

  private

    def add_attachments(attached_resources)
      attached_resources.each do |attached_resource|
        attachments[attached_resource['original_filename']] = attached_resource['tempfile']
      end
    end
end
