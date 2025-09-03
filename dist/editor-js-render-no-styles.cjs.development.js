'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var parse = _interopDefault(require('html-react-parser'));

var Styles = {"header":"Header-module_header__RUooH"};

var Header = function Header(_ref) {
  var level = _ref.level,
    text = _ref.text;
  return function () {
    switch (level) {
      case 1:
        return React__default.createElement("h1", {
          className: Styles.header
        }, text);
      case 2:
        return React__default.createElement("h2", {
          className: Styles.header
        }, text);
      case 3:
        return React__default.createElement("h3", {
          className: Styles.header
        }, text);
      case 4:
        return React__default.createElement("h4", {
          className: Styles.header
        }, text);
      case 5:
        return React__default.createElement("h5", {
          className: Styles.header
        }, text);
      case 6:
        return React__default.createElement("h6", {
          className: Styles.header
        }, text);
      default:
        return React__default.createElement("h1", {
          className: Styles.header
        }, text);
    }
  }();
};

var Styles$1 = {"list":"List-module_list__9aWGq","listItem":"List-module_listItem__PEEBH"};

var parseText = function parseText(text) {
  return parse(text);
};

var UNORDERED_KEY = 'unordered';
var List = function List(_ref) {
  var items = _ref.items,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? UNORDERED_KEY : _ref$style;
  var orderedList = React.useMemo(function () {
    return style === UNORDERED_KEY;
  }, []);
  return orderedList ? React__default.createElement("ul", {
    className: Styles$1.list
  }, items.map(function (text, index) {
    return React__default.createElement("li", {
      className: Styles$1.listItem,
      key: index
    }, parseText(text));
  })) : React__default.createElement("ol", {
    className: Styles$1.list
  }, items.map(function (text, index) {
    return React__default.createElement("li", {
      className: Styles$1.listItem,
      key: index
    }, parseText(text));
  }));
};

var Styles$2 = {"paragraph":"Paragraph-module_paragraph__EUUsG"};

var Paragraph = function Paragraph(_ref) {
  var text = _ref.text;
  return React__default.createElement("p", {
    className: Styles$2.paragraph
  }, parseText(text));
};

var Styles$3 = {"figure":"Image-module_figure__WhosY","stretched":"Image-module_stretched__woaj8","background":"Image-module_background__F38pv","backgroundBorder":"Image-module_backgroundBorder__YPPFw Image-module_background__F38pv","image":"Image-module_image__Zq9Zs","imageBorder":"Image-module_imageBorder__gX9Cl Image-module_image__Zq9Zs","caption":"Image-module_caption__RdztU"};

var Image = function Image(_ref) {
  var file = _ref.file,
    caption = _ref.caption,
    _ref$withBorder = _ref.withBorder,
    withBorder = _ref$withBorder === void 0 ? false : _ref$withBorder,
    _ref$withBackground = _ref.withBackground,
    withBackground = _ref$withBackground === void 0 ? false : _ref$withBackground,
    _ref$stretched = _ref.stretched,
    stretched = _ref$stretched === void 0 ? false : _ref$stretched;
  return React__default.createElement("figure", {
    className: stretched ? Styles$3.stretched : Styles$3.figure
  }, withBackground ? React__default.createElement("div", {
    className: !withBorder ? Styles$3.background : Styles$3.backgroundBorder
  }, React__default.createElement("img", {
    src: file.url,
    className: !withBorder ? Styles$3.image : Styles$3.imageBorder,
    alt: caption
  })) : React__default.createElement("img", {
    src: file.url,
    className: !withBorder ? Styles$3.image : Styles$3.imageBorder,
    alt: caption
  }), caption && React__default.createElement("figcaption", {
    className: Styles$3.caption
  }, caption));
};

var Styles$4 = {"delimiter":"Delimiter-module_delimiter__zh9sr"};

var Delimiter = function Delimiter() {
  return React__default.createElement("div", {
    className: Styles$4.delimiter
  });
};

var Styles$5 = {"code":"Code-module_code__arLxg"};

var Code = function Code(_ref) {
  var code = _ref.code;
  return React__default.createElement("pre", null, React__default.createElement("code", {
    className: Styles$5.code
  }, code));
};

var Styles$6 = {"rawTool":"RawTool-module_rawTool__7-kbB"};

var RawTool = function RawTool(_ref) {
  var html = _ref.html;
  return React__default.createElement("pre", null, React__default.createElement("code", {
    className: Styles$6.rawTool
  }, html));
};

var Styles$7 = {"figure":"Quote-module_figure__NqW4y","blockquote":"Quote-module_blockquote__b4im4","centeredQuote":"Quote-module_centeredQuote__fpH6U Quote-module_blockquote__b4im4","paragraph":"Quote-module_paragraph__l9Wk-"};

var Quote = function Quote(_ref) {
  var text = _ref.text,
    caption = _ref.caption,
    alignment = _ref.alignment;
  var isTextCentered = React.useMemo(function () {
    return alignment === 'center';
  }, []);
  return React__default.createElement("figure", {
    className: Styles$7.figure
  }, React__default.createElement("blockquote", {
    className: isTextCentered ? Styles$7.centeredQuote : Styles$7.blockquote
  }, React__default.createElement("p", {
    className: Styles$7.paragraph
  }, parseText(text))), React__default.createElement("figcaption", null, "\u2014 ", parseText(caption)));
};

var Styles$8 = {"wrapper":"Table-module_wrapper__Qd7Cl","table":"Table-module_table__Dkosn","td":"Table-module_td__jv9tA","tdBorderless":"Table-module_tdBorderless__q5nCu"};

var Table = function Table(_ref) {
  var _heading$;
  var withHeadings = _ref.withHeadings,
    content = _ref.content;
  var _content = content.slice();
  var heading = withHeadings ? _content.splice(0, 1) : [];
  return React__default.createElement("div", {
    className: Styles$8.wrapper
  }, React__default.createElement("table", {
    className: Styles$8.table
  }, withHeadings && React__default.createElement("thead", {
    className: Styles$8.tr
  }, React__default.createElement("tr", null, (_heading$ = heading[0]) == null ? void 0 : _heading$.map(function (text, index) {
    return React__default.createElement("th", {
      key: text + "-" + index,
      className: index === 0 || index === heading[0].length - 1 ? Styles$8.tdBorderless : Styles$8.td
    }, parse(text));
  }))), React__default.createElement("tbody", null, _content.map(function (row, index) {
    return React__default.createElement("tr", {
      key: "row-" + index,
      className: Styles$8.tr
    }, row.map(function (text, index) {
      return React__default.createElement("td", {
        key: text + "-" + index,
        className: index === 0 || index === row.length - 1 ? Styles$8.tdBorderless : Styles$8.td
      }, parse(text));
    }));
  }))));
};

var HEADER_KEY = 'header';
var PARAGRAPH_KEY = 'paragraph';
var LIST_KEY = 'list';
var DELIMITER_KEY = 'delimiter';
var IMAGE_KEY = 'image';
var CODE_KEY = 'code';
var RAW_TOOL_KEY = 'rawTool';
var QUOTE_KEY = 'quote';
var TABLE_KEY = 'table';
var ERROR_KEY = 'error';

var Parser = function Parser(_ref) {
  var _data$blocks;
  var data = _ref.data;
  return React__default.createElement(React__default.Fragment, null, data == null ? void 0 : (_data$blocks = data.blocks) == null ? void 0 : _data$blocks.map(function (item) {
    var type = item.type,
      data = item.data,
      id = item.id;
    switch (type) {
      case HEADER_KEY:
        return React__default.createElement(Header, {
          key: id,
          level: data.level,
          text: data.text
        });
      case PARAGRAPH_KEY:
        return React__default.createElement(Paragraph, {
          key: id,
          text: data.text
        });
      case LIST_KEY:
        return React__default.createElement(List, {
          key: id,
          items: data.items,
          style: data.style
        });
      case DELIMITER_KEY:
        return React__default.createElement(Delimiter, {
          key: id
        });
      case IMAGE_KEY:
        return React__default.createElement(Image, {
          key: id,
          file: data.file,
          caption: data.caption,
          withBorder: data.withBorder,
          withBackground: data.withBackground,
          stretched: data.stretched
        });
      case CODE_KEY:
        return React__default.createElement(Code, {
          key: id,
          code: data.code
        });
      case RAW_TOOL_KEY:
        return React__default.createElement(RawTool, {
          key: id,
          html: data.html
        });
      case QUOTE_KEY:
        return React__default.createElement(Quote, {
          key: id,
          text: data.text,
          caption: data.caption,
          alignment: data.alignment
        });
      case TABLE_KEY:
        return React__default.createElement(Table, {
          key: id,
          content: data.content,
          withHeadings: data.withHeadings
        });
      default:
        return React__default.createElement("div", {
          key: ERROR_KEY
        }, "Error!");
    }
  }));
};

exports.Code = Code;
exports.Delimiter = Delimiter;
exports.Header = Header;
exports.Image = Image;
exports.List = List;
exports.Paragraph = Paragraph;
exports.Parser = Parser;
exports.Quote = Quote;
exports.RawTool = RawTool;
exports.Table = Table;
//# sourceMappingURL=editor-js-render-no-styles.cjs.development.js.map
