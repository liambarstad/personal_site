# Preview all emails at http://localhost:3000/rails/mailers/inquiries
class InquiriesPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/inquiries/inquire
  def inquire
    InquiriesMailer.inquire
  end

end
