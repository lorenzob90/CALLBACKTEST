$(document).ready(function() {
  com.fc.CustomEventListeners = {};
  // LIBRARIES CODE
  function CallbackLib2() {
    lib_instance = "y74xuosy4c";
    com.fc.JavaScriptDistLib.EventListeners.mapLib("CallbackLib2", "y74xuosy4c");
    callbacklib2_varmap = {};
    callbacklib2_varmap._debugService = null;

    function CallbackLib() {
      lib_instance = "1wvrpmcfj4";
      com.fc.JavaScriptDistLib.EventListeners.mapLib("CallbackLib", "1wvrpmcfj4");
      callbacklib_varmap = {};
      callbacklib_varmap._debugService = null;
      /**
       * Describe this function...
       */
      this.executeCallback = executeCallback;

      function executeCallback() {
        return new Promise(function(resolve, reject) {
          com.fc.JavaScriptDistLib.EventListeners.invoke("executeCallback", "1wvrpmcfj4", []);
        });
      }
      /**
       * Describe this function...
       */
      this.trigger = trigger;

      function trigger() {
        return new Promise(function(resolve, reject) {
          // Block#: IbCx|{955_W5/x,,;+2v
          executeCallback().then(response => {;
          });
        });
      }
    };
    var callbacklib = new CallbackLib();
    com.fc.JavaScriptDistLib.EventListeners.register("executeCallback", "CallbackLib",
      /**
       * Describe this function...
       */
      function executeCallback() {
        return new Promise(function(resolve, reject) {
          // Block#: X(m5e979yZeW..L8SHvn
          callback1().then(response => {;
          });
        });
      }
    );

    function colourRandom() {
      var num = Math.floor(Math.random() * Math.pow(2, 24));
      return '#' + ('00000' + num.toString(16)).substr(-6);
    }
    /**
     * Describe this function...
     */
    this.callback1 = callback1;

    function callback1() {
      return new Promise(function(resolve, reject) {
        com.fc.JavaScriptDistLib.EventListeners.invoke("callback1", "y74xuosy4c", []);
      });
    }
    // Block#: yDX2DhSxSNBa2r6,)8cT
    function on_Button_click(e) {
      try {
        // Describe this function...
        // Block#: N1DxQ$O!uENjrAS*+B)t
        callbacklib.trigger().then(response => {;
        });
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="Button"]').on('click', on_Button_click);
  };
  var callbacklib2 = new CallbackLib2();

  function CallbackLib3() {
    lib_instance = "nxcrbj7deo";
    com.fc.JavaScriptDistLib.EventListeners.mapLib("CallbackLib3", "nxcrbj7deo");
    callbacklib3_varmap = {};
    callbacklib3_varmap._debugService = null;

    function CallbackLib() {
      lib_instance = "xyihioik1m";
      com.fc.JavaScriptDistLib.EventListeners.mapLib("CallbackLib", "xyihioik1m");
      callbacklib_varmap = {};
      callbacklib_varmap._debugService = null;
      /**
       * Describe this function...
       */
      this.executeCallback = executeCallback;

      function executeCallback() {
        return new Promise(function(resolve, reject) {
          com.fc.JavaScriptDistLib.EventListeners.invoke("executeCallback", "xyihioik1m", []);
        });
      }
      /**
       * Describe this function...
       */
      this.trigger = trigger;

      function trigger() {
        return new Promise(function(resolve, reject) {
          // Block#: IbCx|{955_W5/x,,;+2v
          executeCallback().then(response => {;
          });
        });
      }
    };
    var callbacklib = new CallbackLib();
    com.fc.JavaScriptDistLib.EventListeners.register("executeCallback", "CallbackLib",
      /**
       * Describe this function...
       */
      function executeCallback() {
        return new Promise(function(resolve, reject) {
          // Block#: $1QicvK``,l[uVV(v|`_
          callback2().then(response => {;
          });
        });
      }
    );

    function colourRandom() {
      var num = Math.floor(Math.random() * Math.pow(2, 24));
      return '#' + ('00000' + num.toString(16)).substr(-6);
    }
    /**
     * Describe this function...
     */
    this.callback2 = callback2;

    function callback2() {
      return new Promise(function(resolve, reject) {
        com.fc.JavaScriptDistLib.EventListeners.invoke("callback2", "nxcrbj7deo", []);
      });
    }
    // Block#: yV9~01zaRc^S%!:cWGiB
    function on_Button2_click(e) {
      try {
        // Describe this function...
        // Block#: ?*XoO?~GUyZ1vk)[]LEZ
        callbacklib.trigger().then(response => {;
        });
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="Button2"]').on('click', on_Button2_click);
  };
  var callbacklib3 = new CallbackLib3();
  // PROJECT CODE
  var _that = this;
  com.fc.JavaScriptDistLib.EventListeners.register("callback1", "CallbackLib2",
    /**
     * Describe this function...
     */
    function callback1() {
      return new Promise(function(resolve, reject) {
        // Block#: 2D}MjMBT1a5mh6_#8c0/
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="TestScreen"]');
        showScreen.show();
        history.pushState({
          'view': 'TestScreen'
        }, 'TestScreen', 'TestScreen');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      });
    }
  );
  com.fc.JavaScriptDistLib.EventListeners.register("callback2", "CallbackLib3",
    /**
     * Describe this function...
     */
    function callback2() {
      return new Promise(function(resolve, reject) {
        // Block#: e;S~8If|U!:p+Ndl8!Yr
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="ScreenTest"]');
        showScreen.show();
        history.pushState({
          'view': 'ScreenTest'
        }, 'ScreenTest', 'ScreenTest');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      });
    }
  );
  // Block#: R#Ct%:6Gsg*QxUmjAWvm
  function on_Button3_click(e) {
    try {
      // Block#: ay{.o*v.o|#X@]Y!@L7P
      let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
      //Close all dialogs
      com.fc.JavaScriptDistLib.Screen.closeDialogs();
      hideScreen.hide();
      let showScreen = $('[obj-name="ScreenTest"]');
      showScreen.show();
      history.pushState({
        'view': 'ScreenTest'
      }, 'ScreenTest', 'ScreenTest');
      hideScreen.triggerHandler('hide');
      showScreen.triggerHandler('show');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button3"]').on('click', on_Button3_click);
  // Block#: xf)VQ1rq-p-e]93?X`oL
  function on_Button4_click(e) {
    try {
      // Block#: uSSOiV=c6?.|u|Xq`(SL
      let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
      //Close all dialogs
      com.fc.JavaScriptDistLib.Screen.closeDialogs();
      hideScreen.hide();
      let showScreen = $('[obj-name="TestScreen"]');
      showScreen.show();
      history.pushState({
        'view': 'TestScreen'
      }, 'TestScreen', 'TestScreen');
      hideScreen.triggerHandler('hide');
      showScreen.triggerHandler('show');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button4"]').on('click', on_Button4_click);
  com.fc.JavaScriptDistLib.Screen.screenPopInit();
  $('[obj-name="MainScreen"]').show();
});
// Generated by snapp
// 766498-928836-338384-440051
