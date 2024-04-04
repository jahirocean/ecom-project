class ApiURL {
  static BaseURL = "http://127.0.0.1:8000/api/";
  static VisitorDetails = this.BaseURL + "SendVisitorDetails";
  static SendContactDetails = this.BaseURL + "SendContactDetails";
  static SendSiteInfo = this.BaseURL + "SendSiteInfo";
  static SendCategoryDetails = this.BaseURL + "SendCategoryDetails";
  static SendSliderInfo = this.BaseURL + "SendSliderInfo";
  static notificationHistory = this.BaseURL + "notificationHistory";
  static OtpVerification = this.BaseURL + "OtpVerification";

  static ProductListByRemark(remark) {
    return this.BaseURL + "ProductListByRemark/" + remark;
  }
  static ProductListByCategory(Category) {
    return this.BaseURL + "ProductListByCategory/" + Category;
  }
  static ProductListBySubCategory(Category, SubCategory) {
    return (
      this.BaseURL + "ProductListBySubCategory/" + Category + "/" + SubCategory
    );
  }
  static ProductDetails(ProductCode) {
    return this.BaseURL + "ProductDetails/" + ProductCode;
  }
  static ProductBySearch(key) {
    return this.BaseURL + "ProductBySearch/" + key;
  }
  static CreateOTP(Mobile) {
    return this.BaseURL + "CreateOTP/" + Mobile;
  }
}

export default ApiURL;
