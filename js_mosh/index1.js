//ES6
// var -> function scoped
// let -> block scoped
// const -> function scoped

function sayHello(){
    for (let i = 0; i < 5; i++){
        console.log(i);
    }
    //console.log(i); //if let is replaced with var above this will print 5 
}

sayHello();


//if a function is defind inside of an object then that's reffered to as a method
const person = {
    name : 'Mosh',
    //walk() : function() {}, //before ES6
    walk() {},
    talk() {}

};

//to access dot and bracket notation

person.talk();
person.name = '';

console.log(person);




//THIS keyword

const person1 = {
    name : 'rishav',
    walk() {
        console.log(this);
    }
};

person1.walk(); //this is returning reference to above object
//but in JS it doesn't always works this way
console.log('---1-------------------------------');
const wall = person1.walk; // walk and walk() giving different results walk() is giving same o/p as above with undefined.
console.log(wall);

wall(); // calling standalone outside of an object gives undefined
// calling wall() above separately is giving global object window object if strict mode inside react js is set then this will not come


// Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}alert: ƒ alert()atob: ƒ atob()blur: ƒ blur()btoa: ƒ btoa()caches: CacheStorage {}cancelAnimationFrame: ƒ cancelAnimationFrame()cancelIdleCallback: ƒ cancelIdleCallback()captureEvents: ƒ captureEvents()chrome: {loadTimes: ƒ, csi: ƒ}clearInterval: ƒ clearInterval()clearTimeout: ƒ clearTimeout()clientInformation: Navigator {vendorSub: "", productSub: "20030107", vendor: "Google Inc.", maxTouchPoints: 0, hardwareConcurrency: 4, …}close: ƒ close()closed: falseconfirm: ƒ confirm()createImageBitmap: ƒ createImageBitmap()crypto: Crypto {subtle: SubtleCrypto}customElements: CustomElementRegistry {}defaultStatus: ""defaultstatus: ""devicePixelRatio: 1document: documentexternal: External {}fetch: ƒ fetch()find: ƒ find()focus: ƒ focus()frameElement: nullframes: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}getComputedStyle: ƒ getComputedStyle()getSelection: ƒ getSelection()history: History {length: 1, scrollRestoration: "auto", state: null}indexedDB: IDBFactory {}innerHeight: 978innerWidth: 1920isSecureContext: truelength: 0localStorage: Storage {length: 0}location: Location {href: "http://127.0.0.1:5500/index.html", ancestorOrigins: DOMStringList, origin: "http://127.0.0.1:5500", protocol: "http:", host: "127.0.0.1:5500", …}locationbar: BarProp {visible: true}matchMedia: ƒ matchMedia()menubar: BarProp {visible: true}moveBy: ƒ moveBy()moveTo: ƒ moveTo()name: ""navigator: Navigator {vendorSub: "", productSub: "20030107", vendor: "Google Inc.", maxTouchPoints: 0, hardwareConcurrency: 4, …}onabort: nullonafterprint: nullonanimationend: nullonanimationiteration: nullonanimationstart: nullonappinstalled: nullonauxclick: nullonbeforeinstallprompt: nullonbeforeprint: nullonbeforeunload: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontextmenu: nulloncuechange: nullondblclick: nullondevicemotion: nullondeviceorientation: nullondeviceorientationabsolute: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullonformdata: nullongotpointercapture: nullonhashchange: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonlanguagechange: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonlostpointercapture: nullonmessage: nullonmessageerror: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonoffline: nullononline: nullonpagehide: nullonpageshow: nullonpause: nullonplay: nullonplaying: nullonpointercancel: nullonpointerdown: nullonpointerenter: nullonpointerleave: nullonpointermove: nullonpointerout: nullonpointerover: nullonpointerrawupdate: nullonpointerup: nullonpopstate: nullonprogress: nullonratechange: nullonrejectionhandled: nullonreset: nullonresize: nullonscroll: nullonsearch: nullonseeked: nullonseeking: nullonselect: nullonselectionchange: nullonselectstart: nullonstalled: nullonstorage: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullontransitionend: nullonunhandledrejection: nullonunload: nullonvolumechange: nullonwaiting: nullonwebkitanimationend: nullonwebkitanimationiteration: nullonwebkitanimationstart: nullonwebkittransitionend: nullonwheel: nullopen: ƒ open()openDatabase: ƒ ()opener: nullorigin: "http://127.0.0.1:5500"outerHeight: 1049outerWidth: 1920pageXOffset: 0pageYOffset: 0parent: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}performance: Performance {timeOrigin: 1602061082319.2422, onresourcetimingbufferfull: null, memory: MemoryInfo, navigation: PerformanceNavigation, timing: PerformanceTiming, …}personalbar: BarProp {visible: true}postMessage: ƒ postMessage()print: ƒ print()prompt: ƒ prompt()queueMicrotask: ƒ queueMicrotask()releaseEvents: ƒ releaseEvents()requestAnimationFrame: ƒ requestAnimationFrame()requestIdleCallback: ƒ requestIdleCallback()resizeBy: ƒ resizeBy()resizeTo: ƒ resizeTo()sayHello: ƒ sayHello()screen: Screen {availWidth: 1920, availHeight: 1049, width: 1920, height: 1080, colorDepth: 24, …}screenLeft: 0screenTop: 31screenX: 0screenY: 31scroll: ƒ scroll()scrollBy: ƒ scrollBy()scrollTo: ƒ scrollTo()scrollX: 0scrollY: 0scrollbars: BarProp {visible: true}self: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}sessionStorage: Storage {IsThisFirstTime_Log_From_LiveServer: "true", length: 1}setInterval: ƒ setInterval()setTimeout: ƒ setTimeout()speechSynthesis: SpeechSynthesis {pending: false, speaking: false, paused: false, onvoiceschanged: null}status: ""statusbar: BarProp {visible: true}stop: ƒ stop()styleMedia: StyleMedia {type: "screen"}toolbar: BarProp {visible: true}top: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}trustedTypes: TrustedTypePolicyFactory {defaultPolicy: null, emptyHTML: TrustedHTML, emptyScript: TrustedScript}visualViewport: VisualViewport {offsetLeft: 0, offsetTop: 0, pageLeft: 0, pageTop: 0, width: 1920, …}webkitCancelAnimationFrame: ƒ webkitCancelAnimationFrame()webkitRequestAnimationFrame: ƒ webkitRequestAnimationFrame()webkitRequestFileSystem: ƒ ()webkitResolveLocalFileSystemURL: ƒ ()webkitStorageInfo: DeprecatedStorageInfo {}window: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}Infinity: InfinityAbortController: ƒ AbortController()AbortSignal: ƒ AbortSignal()AbsoluteOrientationSensor: ƒ AbsoluteOrientationSensor()Accelerometer: ƒ Accelerometer()AggregateError: ƒ AggregateError()AnalyserNode: ƒ AnalyserNode()Animation: ƒ Animation()AnimationEffect: ƒ AnimationEffect()AnimationEvent: ƒ AnimationEvent()AnimationPlaybackEvent: ƒ AnimationPlaybackEvent()AnimationTimeline: ƒ AnimationTimeline()Array: ƒ Array()ArrayBuffer: ƒ ArrayBuffer()Atomics: Atomics {load: ƒ, store: ƒ, add: ƒ, sub: ƒ, and: ƒ, …}Attr: ƒ Attr()Audio: ƒ Audio()AudioBuffer: ƒ AudioBuffer()AudioBufferSourceNode: ƒ AudioBufferSourceNode()AudioContext: ƒ AudioContext()AudioDestinationNode: ƒ AudioDestinationNode()AudioListener: ƒ AudioListener()AudioNode: ƒ AudioNode()AudioParam: ƒ AudioParam()AudioParamMap: ƒ AudioParamMap()AudioProcessingEvent: ƒ AudioProcessingEvent()AudioScheduledSourceNode: ƒ AudioScheduledSourceNode()AudioWorklet: ƒ AudioWorklet()AudioWorkletNode: ƒ AudioWorkletNode()AuthenticatorAssertionResponse: ƒ AuthenticatorAssertionResponse()AuthenticatorAttestationResponse: ƒ AuthenticatorAttestationResponse()AuthenticatorResponse: ƒ AuthenticatorResponse()BackgroundFetchManager: ƒ BackgroundFetchManager()BackgroundFetchRecord: ƒ BackgroundFetchRecord()BackgroundFetchRegistration: ƒ BackgroundFetchRegistration()BarProp: ƒ BarProp()BarcodeDetector: ƒ BarcodeDetector()BaseAudioContext: ƒ BaseAudioContext()BatteryManager: ƒ BatteryManager()BeforeInstallPromptEvent: ƒ BeforeInstallPromptEvent()BeforeUnloadEvent: ƒ BeforeUnloadEvent()BigInt: ƒ BigInt()BigInt64Array: ƒ BigInt64Array()BigUint64Array: ƒ BigUint64Array()BiquadFilterNode: ƒ BiquadFilterNode()Blob: ƒ Blob()BlobEvent: ƒ BlobEvent()Boolean: ƒ Boolean()BroadcastChannel: ƒ BroadcastChannel()ByteLengthQueuingStrategy: ƒ ByteLengthQueuingStrategy()CDATASection: ƒ CDATASection()CSS: ƒ CSS()CSSAnimation: ƒ CSSAnimation()CSSConditionRule: ƒ CSSConditionRule()CSSFontFaceRule: ƒ CSSFontFaceRule()CSSGroupingRule: ƒ CSSGroupingRule()CSSImageValue: ƒ CSSImageValue()CSSImportRule: ƒ CSSImportRule()CSSKeyframeRule: ƒ CSSKeyframeRule()CSSKeyframesRule: ƒ CSSKeyframesRule()CSSKeywordValue: ƒ CSSKeywordValue()CSSMathInvert: ƒ CSSMathInvert()CSSMathMax: ƒ CSSMathMax()CSSMathMin: ƒ CSSMathMin()CSSMathNegate: ƒ CSSMathNegate()CSSMathProduct: ƒ CSSMathProduct()CSSMathSum: ƒ CSSMathSum()CSSMathValue: ƒ CSSMathValue()CSSMatrixComponent: ƒ CSSMatrixComponent()CSSMediaRule: ƒ CSSMediaRule()CSSNamespaceRule: ƒ CSSNamespaceRule()CSSNumericArray: ƒ CSSNumericArray()CSSNumericValue: ƒ CSSNumericValue()CSSPageRule: ƒ CSSPageRule()CSSPerspective: ƒ CSSPerspective()CSSPositionValue: ƒ CSSPositionValue()CSSPropertyRule: ƒ CSSPropertyRule()CSSRotate: ƒ CSSRotate()CSSRule: ƒ CSSRule()CSSRuleList: ƒ CSSRuleList()CSSScale: ƒ CSSScale()CSSSkew: ƒ CSSSkew()CSSSkewX: ƒ CSSSkewX()CSSSkewY: ƒ CSSSkewY()CSSStyleDeclaration: ƒ CSSStyleDeclaration()CSSStyleRule: ƒ CSSStyleRule()CSSStyleSheet: ƒ CSSStyleSheet()CSSStyleValue: ƒ CSSStyleValue()CSSSupportsRule: ƒ CSSSupportsRule()CSSTransformComponent: ƒ CSSTransformComponent()CSSTransformValue: ƒ CSSTransformValue()CSSTransition: ƒ CSSTransition()CSSTranslate: ƒ CSSTranslate()CSSUnitValue: ƒ CSSUnitValue()CSSUnparsedValue: ƒ CSSUnparsedValue()CSSVariableReferenceValue: ƒ CSSVariableReferenceValue()Cache: ƒ Cache()CacheStorage: ƒ CacheStorage()CanvasCaptureMediaStreamTrack: ƒ CanvasCaptureMediaStreamTrack()CanvasGradient: ƒ CanvasGradient()CanvasPattern: ƒ CanvasPattern()CanvasRenderingContext2D: ƒ CanvasRenderingContext2D()ChannelMergerNode: ƒ ChannelMergerNode()ChannelSplitterNode: ƒ ChannelSplitterNode()CharacterData: ƒ CharacterData()Clipboard: ƒ Clipboard()ClipboardEvent: ƒ ClipboardEvent()ClipboardItem: ƒ ClipboardItem()CloseEvent: ƒ CloseEvent()Comment: ƒ Comment()CompositionEvent: ƒ CompositionEvent()CompressionStream: ƒ CompressionStream()ConstantSourceNode: ƒ ConstantSourceNode()ConvolverNode: ƒ ConvolverNode()CountQueuingStrategy: ƒ CountQueuingStrategy()Credential: ƒ Credential()CredentialsContainer: ƒ CredentialsContainer()Crypto: ƒ Crypto()CryptoKey: ƒ CryptoKey()CustomElementRegistry: ƒ CustomElementRegistry()CustomEvent: ƒ CustomEvent()DOMError: ƒ DOMError()DOMException: ƒ DOMException()DOMImplementation: ƒ DOMImplementation()DOMMatrix: ƒ DOMMatrix()DOMMatrixReadOnly: ƒ DOMMatrixReadOnly()DOMParser: ƒ DOMParser()DOMPoint: ƒ DOMPoint()DOMPointReadOnly: ƒ DOMPointReadOnly()DOMQuad: ƒ DOMQuad()DOMRect: ƒ DOMRect()DOMRectList: ƒ DOMRectList()DOM
// RectReadOnly: ƒ DOMRectReadOnly()DOMStringList: ƒ DOMStringList()DOMStringMap: ƒ DOMStringMap()DOMTokenList: ƒ DOMTokenList()DataTransfer: 
//ƒ DataTransfer()DataTransferItem: ƒ DataTransferItem()DataTransferItemList: ƒ DataTransferItemList()DataView: ƒ DataView()Date: 
//ƒ Date()DecompressionStream: ƒ DecompressionStream()DelayNode: ƒ DelayNode()DeviceMotionEvent: ƒ DeviceMotionEvent()DeviceMotionEventAcceleration: ƒ DeviceMotionEventAcceleration()DeviceMotionEventRotationRate: ƒ DeviceMotionEventRotationRate()DeviceOrientationEvent: ƒ DeviceOrientationEvent()Document: ƒ Document()DocumentFragment: ƒ DocumentFragment()DocumentTimeline: ƒ DocumentTimeline()DocumentType: ƒ DocumentType()DragEvent: ƒ DragEvent()DynamicsCompressorNode: ƒ DynamicsCompressorNode()Element: ƒ Element()ElementInternals: ƒ ElementInternals()Error: ƒ Error()ErrorEvent: ƒ ErrorEvent()EvalError: ƒ EvalError()Event: ƒ Event()EventCounts: ƒ EventCounts()EventSource: ƒ EventSource()EventTarget: ƒ EventTarget()External: ƒ External()FeaturePolicy: ƒ FeaturePolicy()FederatedCredential: ƒ FederatedCredential()File: ƒ File()FileList: ƒ FileList()FileReader: ƒ FileReader()FinalizationRegistry: ƒ FinalizationRegistry()Float32Array: ƒ Float32Array()Float64Array: ƒ Float64Array()FocusEvent: ƒ FocusEvent()FontFace: ƒ FontFace()FontFaceSetLoadEvent: ƒ FontFaceSetLoadEvent()FormData: ƒ FormData()FormDataEvent: ƒ FormDataEvent()FragmentDirective: ƒ FragmentDirective()Function: ƒ Function()GainNode: ƒ GainNode()Gamepad: ƒ Gamepad()GamepadButton: ƒ GamepadButton()GamepadEvent: ƒ GamepadEvent()GamepadHapticActuator: ƒ GamepadHapticActuator()Geolocation: ƒ Geolocation()GeolocationCoordinates: ƒ GeolocationCoordinates()GeolocationPosition: ƒ GeolocationPosition()GeolocationPositionError: ƒ GeolocationPositionError()Gyroscope: ƒ Gyroscope()HTMLAllCollection: ƒ HTMLAllCollection()HTMLAnchorElement: ƒ HTMLAnchorElement()HTMLAreaElement: ƒ HTMLAreaElement()HTMLAudioElement: ƒ HTMLAudioElement()HTMLBRElement: ƒ HTMLBRElement()HTMLBaseElement: ƒ HTMLBaseElement()HTMLBodyElement: ƒ HTMLBodyElement()HTMLButtonElement: ƒ HTMLButtonElement()HTMLCanvasElement: ƒ HTMLCanvasElement()HTMLCollection: ƒ HTMLCollection()HTMLContentElement: ƒ HTMLContentElement()HTMLDListElement: ƒ HTMLDListElement()HTMLDataElement: ƒ HTMLDataElement()HTMLDataListElement: ƒ HTMLDataListElement()HTMLDetailsElement: ƒ HTMLDetailsElement()HTMLDialogElement: ƒ HTMLDialogElement()HTMLDirectoryElement: ƒ HTMLDirectoryElement()HTMLDivElement: ƒ HTMLDivElement()HTMLDocument: ƒ HTMLDocument()HTMLElement: ƒ HTMLElement()HTMLEmbedElement: ƒ HTMLEmbedElement()HTMLFieldSetElement: ƒ HTMLFieldSetElement()HTMLFontElement: ƒ HTMLFontElement()HTMLFormControlsCollection: ƒ HTMLFormControlsCollection()HTMLFormElement: ƒ HTMLFormElement()HTMLFrameElement: ƒ HTMLFrameElement()HTMLFrameSetElement: ƒ HTMLFrameSetElement()HTMLHRElement: ƒ HTMLHRElement()HTMLHeadElement: ƒ HTMLHeadElement()HTMLHeadingElement: ƒ HTMLHeadingElement()HTMLHtmlElement: ƒ HTMLHtmlElement()HTMLIFrameElement: ƒ HTMLIFrameElement()HTMLImageElement: ƒ HTMLImageElement()HTMLInputElement: ƒ HTMLInputElement()HTMLLIElement: ƒ HTMLLIElement()HTMLLabelElement: ƒ HTMLLabelElement()HTMLLegendElement: ƒ HTMLLegendElement()HTMLLinkElement: ƒ HTMLLinkElement()HTMLMapElement: ƒ HTMLMapElement()HTMLMarqueeElement: ƒ HTMLMarqueeElement()HTMLMediaElement: ƒ HTMLMediaElement()HTMLMenuElement: ƒ HTMLMenuElement()HTMLMetaElement: ƒ HTMLMetaElement()HTMLMeterElement: ƒ HTMLMeterElement()HTMLModElement: ƒ HTMLModElement()HTMLOListElement: ƒ HTMLOListElement()HTMLObjectElement: ƒ HTMLObjectElement()HTMLOptGroupElement: ƒ HTMLOptGroupElement()HTMLOptionElement: ƒ HTMLOptionElement()HTMLOptionsCollection: ƒ HTMLOptionsCollection()HTMLOutputElement: ƒ HTMLOutputElement()HTMLParagraphElement: ƒ HTMLParagraphElement()HTMLParamElement: ƒ HTMLParamElement()HTMLPictureElement: ƒ HTMLPictureElement()HTMLPreElement: ƒ HTMLPreElement()HTMLProgressElement: ƒ HTMLProgressElement()HTMLQuoteElement: ƒ HTMLQuoteElement()HTMLScriptElement: ƒ HTMLScriptElement()HTMLSelectElement: ƒ HTMLSelectElement()HTMLShadowElement: ƒ HTMLShadowElement()HTMLSlotElement: ƒ HTMLSlotElement()HTMLSourceElement: ƒ HTMLSourceElement()HTMLSpanElement: ƒ HTMLSpanElement()HTMLStyleElement: ƒ HTMLStyleElement()HTMLTableCaptionElement: ƒ HTMLTableCaptionElement()HTMLTableCellElement: ƒ HTMLTableCellElement()HTMLTableColElement: ƒ HTMLTableColElement()HTMLTableElement: ƒ HTMLTableElement()HTMLTableRowElement: ƒ HTMLTableRowElement()HTMLTableSectionElement: ƒ HTMLTableSectionElement()HTMLTemplateElement: ƒ HTMLTemplateElement()HTMLTextAreaElement: ƒ HTMLTextAreaElement()HTMLTimeElement: ƒ HTMLTimeElement()HTMLTitleElement: ƒ HTMLTitleElement()HTMLTrackElement: ƒ HTMLTrackElement()HTMLUListElement: ƒ HTMLUListElement()HTMLUnknownElement: ƒ HTMLUnknownElement()HTMLVideoElement: ƒ HTMLVideoElement()HashChangeEvent: ƒ HashChangeEvent()Headers: ƒ Headers()History: ƒ History()IDBCursor: ƒ IDBCursor()IDBCursorWithValue: ƒ IDBCursorWithValue()IDBDatabase: ƒ IDBDatabase()IDBFactory: ƒ IDBFactory()IDBIndex: ƒ IDBIndex()IDBKeyRange: ƒ IDBKeyRange()IDBObjectStore: ƒ IDBObjectStore()IDBOpenDBRequest: ƒ IDBOpenDBRequest()IDBRequest: ƒ IDBRequest()IDBTransaction: ƒ IDBTransaction()IDBVersionChangeEvent: ƒ IDBVersionChangeEvent()IIRFilterNode: ƒ IIRFilterNode()IdleDeadline: ƒ IdleDeadline()Image: ƒ Image()ImageBitmap: ƒ ImageBitmap()ImageBitmapRenderingContext: ƒ ImageBitmapRenderingContext()ImageCapture: ƒ ImageCapture()ImageData: ƒ ImageData()InputDeviceCapabilities: ƒ InputDeviceCapabilities()InputDeviceInfo: ƒ InputDeviceInfo()InputEvent: ƒ InputEvent()Int8Array: ƒ Int8Array()Int16Array: ƒ Int16Array()Int32Array: ƒ Int32Array()IntersectionObserver: ƒ IntersectionObserver()IntersectionObserverEntry: ƒ IntersectionObserverEntry()Intl: {getCanonicalLocales: ƒ, DateTimeFormat: ƒ, NumberFormat: ƒ, Collator: ƒ, v8BreakIterator: ƒ, …}JSON: JSON {Symbol(Symbol.toStringTag): "JSON", parse: ƒ, stringify: ƒ}Keyboard: ƒ Keyboard()KeyboardEvent: ƒ KeyboardEvent()KeyboardLayoutMap: ƒ KeyboardLayoutMap()KeyframeEffect: ƒ KeyframeEffect()LargestContentfulPaint: ƒ LargestContentfulPaint()LayoutShift: ƒ LayoutShift()LayoutShiftAttribution: ƒ LayoutShiftAttribution()LinearAccelerationSensor: ƒ LinearAccelerationSensor()Location: ƒ Location()Lock: ƒ Lock()LockManager: ƒ LockManager()MIDIAccess: ƒ MIDIAccess()MIDIConnectionEvent: ƒ MIDIConnectionEvent()MIDIInput: ƒ MIDIInput()MIDIInputMap: ƒ MIDIInputMap()MIDIMessageEvent: ƒ MIDIMessageEvent()MIDIOutput: ƒ MIDIOutput()MIDIOutputMap: ƒ MIDIOutputMap()MIDIPort: ƒ MIDIPort()Map: ƒ Map()Math: Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}MediaCapabilities: ƒ MediaCapabilities()MediaDeviceInfo: ƒ MediaDeviceInfo()MediaDevices: ƒ MediaDevices()MediaElementAudioSourceNode: ƒ MediaElementAudioSourceNode()MediaEncryptedEvent: ƒ MediaEncryptedEvent()MediaError: ƒ MediaError()MediaKeyMessageEvent: ƒ MediaKeyMessageEvent()MediaKeySession: ƒ MediaKeySession()MediaKeyStatusMap: ƒ MediaKeyStatusMap()MediaKeySystemAccess: ƒ MediaKeySystemAccess()MediaKeys: ƒ MediaKeys()MediaList: ƒ MediaList()MediaMetadata: ƒ MediaMetadata()MediaQueryList: ƒ MediaQueryList()MediaQueryListEvent: ƒ MediaQueryListEvent()MediaRecorder: ƒ MediaRecorder()MediaSession: ƒ MediaSession()MediaSettingsRange: ƒ MediaSettingsRange()MediaSource: ƒ MediaSource()MediaStream: ƒ MediaStream()MediaStreamAudioDestinationNode: ƒ MediaStreamAudioDestinationNode()MediaStreamAudioSourceNode: ƒ MediaStreamAudioSourceNode()MediaStreamEvent: ƒ MediaStreamEvent()MediaStreamTrack: ƒ MediaStreamTrack()MediaStreamTrackEvent: ƒ MediaStreamTrackEvent()MessageChannel: ƒ MessageChannel()MessageEvent: ƒ MessageEvent()MessagePort: ƒ MessagePort()MimeType: ƒ MimeType()MimeTypeArray: ƒ MimeTypeArray()MouseEvent: ƒ MouseEvent()MutationEvent: ƒ MutationEvent()MutationObserver: ƒ MutationObserver()MutationRecord: ƒ MutationRecord()NaN: NaNNamedNodeMap: ƒ NamedNodeMap()NavigationPreloadManager: ƒ NavigationPreloadManager()Navigator: ƒ Navigator()NetworkInformation: ƒ NetworkInformation()Node: ƒ Node()NodeFilter: ƒ NodeFilter()NodeIterator: ƒ NodeIterator()NodeList: ƒ NodeList()Notification: ƒ Notification()Number: ƒ Number()Object: ƒ Object()OfflineAudioCompletionEvent: ƒ OfflineAudioCompletionEvent()OfflineAudioContext: ƒ OfflineAudioContext()OffscreenCanvas: ƒ OffscreenCanvas()OffscreenCanvasRenderingContext2D: ƒ OffscreenCanvasRenderingContext2D()Option: ƒ Option()OrientationSensor: ƒ OrientationSensor()OscillatorNode: ƒ OscillatorNode()OverconstrainedError: ƒ OverconstrainedError()PageTransitionEvent: ƒ PageTransitionEvent()PannerNode: ƒ PannerNode()PasswordCredential: ƒ PasswordCredential()Path2D: ƒ Path2D()PaymentAddress: ƒ PaymentAddress()PaymentInstruments: ƒ PaymentInstruments()PaymentManager: ƒ PaymentManager()PaymentMethodChangeEvent: ƒ PaymentMethodChangeEvent()PaymentRequest: ƒ PaymentRequest()PaymentRequestUpdateEvent: ƒ PaymentRequestUpdateEvent()PaymentResponse: ƒ PaymentResponse()Performance: ƒ Performance()PerformanceElementTiming: ƒ PerformanceElementTiming()PerformanceEntry: ƒ PerformanceEntry()PerformanceEventTiming: ƒ PerformanceEventTiming()PerformanceLongTaskTiming: ƒ PerformanceLongTaskTiming()PerformanceMark: ƒ PerformanceMark()PerformanceMeasure: ƒ PerformanceMeasure()PerformanceNavigation: ƒ PerformanceNavigation()PerformanceNavigationTiming: ƒ PerformanceNavigationTiming()PerformanceObserver: ƒ PerformanceObserver()PerformanceObserverEntryList: ƒ PerformanceObserverEntryList()PerformancePaintTiming: ƒ PerformancePaintTiming()PerformanceResourceTiming: ƒ PerformanceResourceTiming()PerformanceServerTiming: ƒ PerformanceServerTiming()PerformanceTiming: ƒ PerformanceTiming()PeriodicSyncManager: ƒ PeriodicSyncManager()PeriodicWave: ƒ PeriodicWave()PermissionStatus: ƒ PermissionStatus()Permissions: ƒ Permissions()PhotoCapabilities: ƒ PhotoCapabilities()PictureInPictureEvent: ƒ PictureInPictureEvent()PictureInPictureWindow: ƒ PictureInPictureWindow()Plugin: ƒ Plugin()PluginArray: ƒ PluginArray()PointerEvent: ƒ PointerEvent()PopStateEvent: ƒ PopStateEvent()Presentation: ƒ Presentation()PresentationAvailability: ƒ PresentationAvailability()PresentationConnection: ƒ PresentationConnection()PresentationConnectionAvailableEvent: ƒ PresentationConnectionAvailableEvent()PresentationConnectionCloseEvent: ƒ PresentationConnectionCloseEvent()PresentationConnectionList: ƒ PresentationConnectionList()PresentationReceiver: ƒ PresentationReceiver()PresentationRequest: ƒ PresentationRequest()ProcessingInstruction: ƒ ProcessingInstruction()ProgressEvent: ƒ ProgressEvent()Promise: ƒ Promise()PromiseRejectionEvent: ƒ PromiseRejectionEvent()Proxy: ƒ Proxy()PublicKeyCredential: ƒ PublicKeyCredential()PushManager: ƒ PushManager()PushSubscription: ƒ PushSubscription()PushSubscriptionOptions: ƒ PushSubscriptionOptions()RTCCertificate: ƒ RTCCertificate()RTCDTMFSender: ƒ RTCDTMFSender()RTCDTMFToneChangeEvent: ƒ RTCDTMFToneChangeEvent()RTCDataChannel: ƒ RTCDataChannel()RTCDataChannelEvent: ƒ RTCDataChannelEvent()RTCDtlsTransport: ƒ RTCDtlsTransport()RTCError: ƒ RTCError()RTCErrorEvent: ƒ RTCErrorEvent()RTCIceCandidate: ƒ RTCIceCandidate()RTCIceTransport: ƒ RTCIceTransport()RTCPeerConnection: ƒ RTCPeerConnection()RTCPeerConnectionIceErrorEvent: ƒ RTCPeerConnectionIceErrorEvent()RTCPeerConnectionIceEvent: ƒ RTCPeerConnectionIceEvent()RTCRtpReceiver: ƒ RTCRtpReceiver()RTCRtpSender: ƒ RTCRtpSender()RTCRtpTransceiver: ƒ RTCRtpTransceiver()RTCSctpTransport: ƒ RTCSctpTransport()RTCSessionDescription: ƒ RTCSessionDescription()RTCStatsReport: ƒ RTCStatsReport()RTCTrackEvent: ƒ RTCTrackEvent()RadioNodeList: ƒ RadioNodeList()Range: ƒ Range()RangeError: ƒ RangeError()ReadableStream: ƒ ReadableStream()ReadableStreamDefaultReader: ƒ ReadableStreamDefaultReader()ReferenceError: ƒ ReferenceError()Reflect: {defineProperty: ƒ, deleteProperty: ƒ, apply: ƒ, construct: ƒ, get: ƒ, …}RegExp: ƒ RegExp()RelativeOrientationSensor: ƒ RelativeOrientationSensor()RemotePlayback: ƒ RemotePlayback()ReportingObserver: ƒ ReportingObserver()Request: ƒ Request()ResizeObserver: ƒ ResizeObserver()ResizeObserverEntry: ƒ ResizeObserverEntry()ResizeObserverSize: ƒ ResizeObserverSize()Response: ƒ Response()SVGAElement: ƒ SVGAElement()SVGAngle: ƒ SVGAngle()SVGAnimateElement: ƒ SVGAnimateElement()SVGAnimateMotionElement: ƒ SVGAnimateMotionElement()SVGAnimateTransformElement: ƒ SVGAnimateTransformElement()SVGAnimatedAngle: ƒ SVGAnimatedAngle()SVGAnimatedBoolean: ƒ SVGAnimatedBoolean()SVGAnimatedEnumeration: ƒ SVGAnimatedEnumeration()SVGAnimatedInteger: ƒ SVGAnimatedInteger()SVGAnimatedLength: ƒ SVGAnimatedLength()SVGAnimatedLengthList: ƒ SVGAnimatedLengthList()SVGAnimatedNumber: ƒ SVGAnimatedNumber()SVGAnimatedNumberList: ƒ SVGAnimatedNumberList()SVGAnimatedPreserveAspectRatio: ƒ SVGAnimatedPreserveAspectRatio()SVGAnimatedRect: ƒ SVGAnimatedRect()SVGAnimatedString: ƒ SVGAnimatedString()SVGAnimatedTransformList: ƒ SVGAnimatedTransformList()SVGAnimationElement: ƒ SVGAnimationElement()SVGCircleElement: ƒ SVGCircleElement()SVGClipPathElement: ƒ SVGClipPathElement()SVGComponentTransferFunctionElement: ƒ SVGComponentTransferFunctionElement()SVGDefsElement: ƒ SVGDefsElement()SVGDescElement: ƒ SVGDescElement()SVGElement: ƒ SVGElement()SVGEllipseElement: ƒ SVGEllipseElement()SVGFEBlendElement: ƒ SVGFEBlendElement()SVGFEColorMatrixElement: ƒ SVGFEColorMatrixElement()SVGFEComponentTransferElement: ƒ SVGFEComponentTransferElement()SVGFECompositeElement: ƒ SVGFECompositeElement()SVGFEConvolveMatrixElement: ƒ SVGFEConvolveMatrixElement()SVGFEDiffuseLightingElement: ƒ SVGFEDiffuseLightingElement()SVGFEDisplacementMapElement: ƒ SVGFEDisplacementMapElement()SVGFEDistantLightElement: ƒ SVGFEDistantLightElement()SVGFEDropShadowElement: ƒ SVGFEDropShadowElement()SVGFEFloodElement: ƒ SVGFEFloodElement()SVGFEFuncAElement: ƒ SVGFEFuncAElement()SVGFEFuncBElement: ƒ SVGFEFuncBElement()SVGFEFuncGElement: ƒ SVGFEFuncGElement()SVGFEFuncRElement: ƒ SVGFEFuncRElement()SVGFEGaussianBlurElement: ƒ SVGFEGaussianBlurElement()SVGFEImageElement: ƒ SVGFEImageElement()SVGFEMergeElement: ƒ SVGFEMergeElement()SVGFEMergeNodeElement: ƒ SVGFEMergeNodeElement()SVGFEMorphologyElement: ƒ SVGFEMorphologyElement()SVGFEOffsetElement: ƒ SVGFEOffsetElement()SVGFEPointLightElement: ƒ SVGFEPointLightElement()SVGFESpecularLightingElement: ƒ SVGFESpecularLightingElement()SVGFESpotLightElement: ƒ SVGFESpotLightElement()SVGFETileElement: ƒ SVGFETileElement()SVGFETurbulenceElement: ƒ SVGFETurbulenceElement()SVGFilterElement: ƒ SVGFilterElement()SVGForeignObjectElement: ƒ SVGForeignObjectElement()SVGGElement: ƒ SVGGElement()SVGGeometryElement: ƒ SVGGeometryElement()SVGGradientElement: ƒ SVGGradientElement()SVGGraphicsElement: ƒ SVGGraphicsElement()SVGImageElement: ƒ SVGImageElement()SVGLength: ƒ SVGLength()SVGLengthList: ƒ SVGLengthList()SVGLineElement: ƒ SVGLineElement()SVGLinearGradientElement: ƒ SVGLinearGradientElement()SVGMPathElement: ƒ SVGMPathElement()SVGMarkerElement: ƒ SVGMarkerElement()SVGMaskElement: ƒ SVGMaskElement()SVGMatrix: ƒ SVGMatrix()SVGMetadataElement: ƒ SVGMetadataElement()SVGNumber: ƒ SVGNumber()SVGNumberList: ƒ SVGNumberList()SVGPathElement: ƒ SVGPathElement()SVGPatternElement: ƒ SVGPatternElement()SVGPoint: ƒ SVGPoint()SVGPointList: ƒ SVGPointList()SVGPolygonElement: ƒ SVGPolygonElement()SVGPolylineElement: ƒ SVGPolylineElement()SVGPreserveAspectRatio: ƒ SVGPreserveAspectRatio()SVGRadialGradientElement: ƒ SVGRadialGradientElement()SVGRect: ƒ SVGRect()SVGRectElement: ƒ SVGRectElement()SVGSVGElement: ƒ SVGSVGElement()SVGScriptElement: ƒ SVGScriptElement()SVGSetElement: ƒ SVGSetElement()SVGStopElement: ƒ SVGStopElement()SVGStringList: ƒ SVGStringList()SVGStyleElement: ƒ SVGStyleElement()SVGSwitchElement: ƒ SVGSwitchElement()SVGSymbolElement: ƒ SVGSymbolElement()SVGTSpanElement: ƒ SVGTSpanElement()SVGTextContentElement: ƒ SVGTextContentElement()SVGTextElement: ƒ SVGTextElement()SVGTextPathElement: ƒ SVGTextPathElement()SVGTextPositioningElement: ƒ SVGTextPositioningElement()SVGTitleElement: ƒ SVGTitleElement()SVGTransform: ƒ SVGTransform()SVGTransformList: ƒ SVGTransformList()SVGUnitTypes: ƒ SVGUnitTypes()SVGUseElement: ƒ SVGUseElement()SVGViewElement: ƒ SVGViewElement()Screen: ƒ Screen()ScreenOrientation: ƒ ScreenOrientation()ScriptProcessorNode: ƒ ScriptProcessorNode()SecurityPolicyViolationEvent: ƒ SecurityPolicyViolationEvent()Selection: ƒ Selection()Sensor: ƒ Sensor()SensorErrorEvent: ƒ SensorErrorEvent()ServiceWorker: ƒ ServiceWorker()ServiceWorkerContainer: ƒ ServiceWorkerContainer()ServiceWorkerRegistration: ƒ ServiceWorkerRegistration()Set: ƒ Set()ShadowRoot: ƒ ShadowRoot()SharedArrayBuffer: ƒ SharedArrayBuffer()SharedWorker: ƒ SharedWorker()SourceBuffer: ƒ SourceBuffer()SourceBufferList: ƒ SourceBufferList()SpeechSynthesisErrorEvent: ƒ SpeechSynthesisErrorEvent()SpeechSynthesisEvent: ƒ SpeechSynthesisEvent()SpeechSynthesisUtterance: ƒ SpeechSynthesisUtterance()StaticRange: ƒ StaticRange()StereoPannerNode: ƒ StereoPannerNode()Storage: ƒ Storage()StorageEvent: ƒ StorageEvent()StorageManager: ƒ StorageManager()String: ƒ String()StylePropertyMap: ƒ StylePropertyMap()StylePropertyMapReadOnly: ƒ StylePropertyMapReadOnly()StyleSheet: ƒ StyleSheet()StyleSheetList: ƒ StyleSheetList()SubmitEvent: ƒ SubmitEvent()SubtleCrypto: ƒ SubtleCrypto()Symbol: ƒ Symbol()SyncManager: ƒ SyncManager()SyntaxError: ƒ SyntaxError()TaskAttributionTiming: ƒ TaskAttributionTiming()Text: ƒ Text()TextDecoder: ƒ TextDecoder()TextDecoderStream: ƒ TextDecoderStream()TextEncoder: ƒ TextEncoder()TextEncoderStream: ƒ TextEncoderStream()TextEvent: ƒ TextEvent()TextMetrics: ƒ TextMetrics()TextTrack: ƒ TextTrack()TextTrackCue: ƒ TextTrackCue()TextTrackCueList: ƒ TextTrackCueList()TextTrackList: ƒ TextTrackList()TimeRanges: ƒ TimeRanges()Touch: ƒ Touch()TouchEvent: ƒ TouchEvent()TouchList: ƒ TouchList()TrackEvent: ƒ TrackEvent()TransformStream: ƒ TransformStream()TransitionEvent: ƒ TransitionEvent()TreeWalker: ƒ TreeWalker()TrustedHTML: ƒ TrustedHTML()TrustedScript: ƒ TrustedScript()TrustedScriptURL: ƒ TrustedScriptURL()TrustedTypePolicy: ƒ TrustedTypePolicy()TrustedTypePolicyFactory: ƒ TrustedTypePolicyFactory()TypeError: ƒ TypeError()UIEvent: ƒ UIEvent()URIError: ƒ URIError()URL: ƒ URL()URLSearchParams: ƒ URLSearchParams()USB: ƒ USB()USBAlternateInterface: ƒ USBAlternateInterface()USBConfiguration: ƒ USBConfiguration()USBConnectionEvent: ƒ USBConnectionEvent()USBDevice: ƒ USBDevice()USBEndpoint: ƒ USBEndpoint()USBInTransferResult: ƒ USBInTransferResult()USBInterface: ƒ USBInterface()USBIsochronousInTransferPacket: ƒ USBIsochronousInTransferPacket()USBIsochronousInTransferResult: ƒ USBIsochronousInTransferResult()USBIsochronousOutTransferPacket: ƒ USBIsochronousOutTransferPacket()USBIsochronousOutTransferResult: ƒ USBIsochronousOutTransferResult()USBOutTransferResult: ƒ USBOutTransferResult()Uint8Array: ƒ Uint8Array()Uint8ClampedArray: ƒ Uint8ClampedArray()Uint16Array: ƒ Uint16Array()Uint32Array: ƒ Uint32Array()UserActivation: ƒ UserActivation()VTTCue: ƒ VTTCue()ValidityState: ƒ ValidityState()VideoPlaybackQuality: ƒ VideoPlaybackQuality()VisualViewport: ƒ VisualViewport()WakeLock: ƒ WakeLock()WakeLockSentinel: ƒ WakeLockSentinel()WaveShaperNode: ƒ WaveShaperNode()WeakMap: ƒ WeakMap()WeakRef: ƒ WeakRef()WeakSet: ƒ WeakSet()WebAssembly: WebAssembly {compile: ƒ, validate: ƒ, instantiate: ƒ, compileStreaming: ƒ, instantiateStreaming: ƒ, …}WebGL2RenderingContext: ƒ WebGL2RenderingContext()WebGLActiveInfo: ƒ WebGLActiveInfo()WebGLBuffer: ƒ WebGLBuffer()WebGLContextEvent: ƒ WebGLContextEvent()WebGLFramebuffer: ƒ WebGLFramebuffer()WebGLProgram: ƒ WebGLProgram()WebGLQuery: ƒ WebGLQuery()WebGLRenderbuffer: ƒ WebGLRenderbuffer()WebGLRenderingContext: ƒ WebGLRenderingContext()WebGLSampler: ƒ WebGLSampler()WebGLShader: ƒ WebGLShader()WebGLShaderPrecisionFormat: ƒ WebGLShaderPrecisionFormat()WebGLSync: ƒ WebGLSync()WebGLTexture: ƒ WebGLTexture()WebGLTransformFeedback: ƒ WebGLTransformFeedback()WebGLUniformLocation: ƒ WebGLUniformLocation()WebGLVertexArrayObject: ƒ WebGLVertexArrayObject()WebKitCSSMatrix: ƒ DOMMatrix()WebKitMutationObserver: ƒ MutationObserver()WebSocket: ƒ WebSocket()WheelEvent: ƒ WheelEvent()Window: ƒ Window()Worker: ƒ Worker()Worklet: ƒ Worklet()WritableStream: ƒ WritableStream()WritableStreamDefaultWriter: ƒ WritableStreamDefaultWriter()XMLDocument: ƒ XMLDocument()XMLHttpRequest: ƒ XMLHttpRequest()XMLHttpRequestEventTarget: ƒ XMLHttpRequestEventTarget()XMLHttpRequestUpload: ƒ XMLHttpRequestUpload()XMLSerializer: ƒ XMLSerializer()XPathEvaluator: ƒ XPathEvaluator()XPathExpression: ƒ XPathExpression()XPathResult: ƒ XPathResult()XRAnchor: ƒ XRAnchor()XRAnchorSet: ƒ XRAnchorSet()XRBoundedReferenceSpace: ƒ XRBoundedReferenceSpace()XRDOMOverlayState: ƒ XRDOMOverlayState()XRFrame: ƒ XRFrame()XRHitTestResult: ƒ XRHitTestResult()XRHitTestSource: ƒ XRHitTestSource()XRInputSource: ƒ XRInputSource()XRInputSourceArray: ƒ XRInputSourceArray()XRInputSourceEvent: ƒ XRInputSourceEvent()XRInputSourcesChangeEvent: ƒ XRInputSourcesChangeEvent()XRLayer: ƒ XRLayer()XRPose: ƒ XRPose()XRRay: ƒ XRRay()XRReferenceSpace: ƒ XRReferenceSpace()XRReferenceSpaceEvent: ƒ XRReferenceSpaceEvent()XRRenderState: ƒ XRRenderState()XRRigidTransform: ƒ XRRigidTransform()XRSession: ƒ XRSession()XRSessionEvent: ƒ XRSessionEvent()XRSpace: ƒ XRSpace()XRSystem: ƒ XRSystem()XRTransientInputHitTestResult: ƒ XRTransientInputHitTestResult()XRTransientInputHitTestSource: ƒ XRTransientInputHitTestSource()XRView: ƒ XRView()XRViewerPose: ƒ XRViewerPose()XRViewport: ƒ XRViewport()XRWebGLLayer: ƒ XRWebGLLayer()XSLTProcessor: ƒ XSLTProcessor()console: console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}decodeURI: ƒ decodeURI()decodeURIComponent: ƒ decodeURIComponent()encodeURI: ƒ encodeURI()encodeURIComponent: ƒ encodeURIComponent()escape: ƒ escape()eval: ƒ eval()event: undefinedglobalThis: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}isFinite: ƒ isFinite()isNaN: ƒ isNaN()offscreenBuffering: trueparseFloat: ƒ parseFloat()parseInt: ƒ parseInt()undefined: undefinedunescape: ƒ unescape()webkitMediaStream: ƒ MediaStream()webkitRTCPeerConnection: ƒ RTCPeerConnection()webkitSpeechGrammar: ƒ SpeechGrammar()webkitSpeechGrammarList: ƒ SpeechGrammarList()webkitSpeechRecognition: ƒ SpeechRecognition()webkitSpeechRecognitionError: ƒ SpeechRecognitionErrorEvent()webkitSpeechRecognitionEvent: ƒ SpeechRecognitionEvent()webkitURL: ƒ URL()__proto__: Window






//BINDING THIS
// function in JS are objcts bind is used to bin f'n to object.

console.log('---2-------------------------------');
const wallbind = person1.walk.bind(person1); // walk and walk() giving different results walk() is giving same o/p as above with undefined.
wallbind();



//ARROW FUNCTIONS

//taking names as square1, square2, square3  because it'll give error all 3 functions below are doing same job

//older version
const square1 = function(number){
    return number * number;
}

//ES6
const square2 = number => {
    return number * number;
}

//To make it even shorter if the body of the f'n  contains only single line
//(number ) here () are used if there are multiple parameters to be passes in case of single parameter it can be removved
const square3 = (number) => number * number ;
console.log(square3(9));



// Example to demonstrate arrow functions
const jobs = [
    { id : 1, isActive : true },
    { id : 2, isActive : true },
    { id : 3, isActive : false },
];

// To get only active objects
const activeJobs = jobs.filter(function(job) {return job.isActive; });
//converting thi to arrow
const activeJobs1 = jobs.filter((job) =>  job.isActive );
console.log(activeJobs1)



//ARROW Functions don't rebind THIS

//function inside the setTimeout will be executed after the 1000 time

const person4 = {
    talk() {
        setTimeout(function() {
            console.log('this', this)
        }, 1000);
    }
};

person4.talk();

//To solve peoblem in person person4 earlier this self approach was used
const person5 = {
    talk() {
        var self = this;
        setTimeout(function() {
            console.log('this', self)
        }, 1000);
    }
};

person5.talk();

//arrow functions don't rebind to this keyword
const person6 = {
    talk() {
        setTimeout(() => {
            console.log("thisarrow", this)
        }, 1000);
    }
};

person6.talk();


//ARRAYS MAP
//used to render list item

const colors = ['red', 'green', 'blue', 'white'];

const items = colors.map(function(color) {
    return 'li' + color + '</li>'
});

//converting to arrow functions
const items1 = colors.map( color => 'li' + color + '</li>' );

//using template literal to make above code cleaner
const items2 = colors.map( color => `<li>${color}</li>` );
document.write(items2);




//Object destructuring
const address = {
    street : 'abc',
    city : '',
    contry : ''
};

// const street = address.street;
// const city = address.city;
// const state = address.state;

//above 3 lines is equivalent

const { street, city, country } = address;

//if only street is to be printed with a different name
console.log(street);
document.write(street);

//if only street is to be printed with a different name
const { street:st } = address
document.write(st);


//spread operator

const firstarray = [1, 2, 3];
const secondarray = [4, 5, 6];

//to combine above arrays
const combine = firstarray.concat(secondarray);
//same thing using spread
const combin1 = [...firstarray, ...secondarray];
//benefit of using this is if anything is to be inserted in between thts possible 
//const combin1 = [...firstarray, 'a', ...secondarray, 'b'];

//cloning array
const clone = [...firstarray];

