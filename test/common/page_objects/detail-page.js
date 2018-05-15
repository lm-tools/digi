const Page = require('./page');
class DetailPage extends Page {

  visit(id, fromSearch, result) {
    return this.browser.visit(this.routes.detailsUrl(id, fromSearch, result));
  }

  categoryText() {
    return this.extractText('category');
  }

  categoryLink() {
    return this.extractLink('category').href;
  }

  link() {
    return this.extractLink('link');
  }

  header() {
    return this.extractText('header');
  }

  summary() {
    return this.extractText('summary');
  }

  journalMessage() {
    return this.extractText('journal-message');
  }

  copyClipboardJournalContent() {
    return this.extractAttributeValue('copy-clipboard-journal-link', 'data-clipboard-text');
  }

  copyClipboard() {
    return this.browser.clickLink('[data-test="copy-clipboard-journal-link"]');
  }

  isMessageCopiedTextDisplayed() {
    return this.hasClass('copy-journal-message-switch', 'toggle');
  }

  isMessageCopiedAlertBoxDisplayed() {
    return this.hasClass('copy-journal-message-switch', 'toggled-once');
  }


  /**
   * @param {object} resourceContext - the context object for the resource
   * returns a list of categories as an object: { text, href }.
   */
  getCategories(resourceContext) {
    return this.browser.queryAll('[data-test="category-link-wrap"]', resourceContext)
      .map(categoryContext => this.extractLink('category-link', categoryContext));
  }

}
module.exports = DetailPage;
