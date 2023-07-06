import './App.css';

function App() {

  var mParticle = window.mParticle;

  var logUserAttribute = function() {
      var currentUser = mParticle.Identity.getCurrentUser();
      currentUser.setUserAttribute("Test User Attribute","Attribute 1");
  }
  
  var logCustomEvent = function() {
      mParticle.logEvent(
        'Test Custom Event',
        mParticle.EventType.Other,
        {}
      );
  }
  
  var logImpressionEvent = function() {
      var product = mParticle.eCommerce.createProduct(
        'Double Room - Econ Rate',
        'econ-1', 
        100.00, 
        4
      );
      var impression = mParticle.eCommerce.createImpression('Test Impression Event', product);
      mParticle.eCommerce.logImpression(impression);
  }
  
  var logPageViewEvent = function() {
      mParticle.logPageView(
        "Test Page View",
        {"page": window.location.toString()}
      );
  }
  
  var logPurchaseEvent = function() {
      var customProductAttributes = {
        'ocean-view': true,
        'balcony': false
      };
      var product1 = mParticle.eCommerce.createProduct(
        'Double Room - Econ Rate',  // Name
        'econ-1',                   // SKU
        100.00,                     // Price
        4,                          // Quantity
        'variant',                  // Variant
        'room',                     // Category
        'lodge-o-rama',             // Brand
        'banner',                   // Position
        null,                       // Coupon code
        customProductAttributes     // The custom attributes defined in a separate variable above
      );
      var product2 = mParticle.eCommerce.createProduct(
        'Double Room - Econ Rate',
        'econ-1', 
        100.00, 
        4
      );
      var transactionAttributes = {
        Id: 'foo-transaction-id',
        Revenue: 430.00,
        Tax: 30
      };
      var customAttributes = {
        'sale': true
      };
      var customFlags = {
        'Google.Category': 'travel'
      };
      mParticle.eCommerce.logProductAction(
        mParticle.ProductActionType.Purchase,
        [product1, product2],
        customAttributes,
        customFlags,
        transactionAttributes);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p className='mb-4'>Web View App 1.0 | mParticle</p>
        <br></br>
        <button className='btn btn-secondary' onClick={logUserAttribute}>User Attribute</button>
        <br></br>
        <button className='btn btn-primary' onClick={logCustomEvent}>Custom Event</button>
        <br></br>
        <button className='btn btn-warning' onClick={logImpressionEvent}>Impression Event</button>
        <br></br>
        <button className='btn btn-success' onClick={logPageViewEvent}>Page View Event</button>
        <br></br>
        <button className='btn btn-danger' onClick={logPurchaseEvent}>Purchase Event</button>
        <br></br>
        <br></br>
        <p className='smallText'>© created by Lautaro Echeverria 2023</p>
      </header>
    </div>
  );

}

export default App;
