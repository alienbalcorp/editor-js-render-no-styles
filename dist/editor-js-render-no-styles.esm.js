import React, { useMemo } from 'react';
import parse from 'html-react-parser';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".Header-module_header__RUooH{font-family:Lucida Grande,Lucida Sans Unicode,Lucida Sans;letter-spacing:-.03em;line-height:1.25em;margin:1rem 0;outline:none;padding:.6em 0 3px}";
var Styles = {"header":"Header-module_header__RUooH"};
styleInject(css_248z);

var Header = function Header(_ref) {
  var level = _ref.level,
    text = _ref.text;
  return function () {
    switch (level) {
      case 1:
        return React.createElement("h1", {
          className: Styles.header
        }, text);
      case 2:
        return React.createElement("h2", {
          className: Styles.header
        }, text);
      case 3:
        return React.createElement("h3", {
          className: Styles.header
        }, text);
      case 4:
        return React.createElement("h4", {
          className: Styles.header
        }, text);
      case 5:
        return React.createElement("h5", {
          className: Styles.header
        }, text);
      case 6:
        return React.createElement("h6", {
          className: Styles.header
        }, text);
      default:
        return React.createElement("h1", {
          className: Styles.header
        }, text);
    }
  }();
};

var css_248z$1 = ".List-module_list__9aWGq{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:0;outline:none;padding-left:40px}.List-module_listItem__PEEBH{line-height:1.6em;padding:5.5px 0 5.5px 3px}";
var Styles$1 = {"list":"List-module_list__9aWGq","listItem":"List-module_listItem__PEEBH"};
styleInject(css_248z$1);

var parseText = function parseText(text) {
  return parse(text);
};

var UNORDERED_KEY = 'unordered';
var List = function List(_ref) {
  var items = _ref.items,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? UNORDERED_KEY : _ref$style;
  var orderedList = useMemo(function () {
    return style === UNORDERED_KEY;
  }, []);
  return orderedList ? React.createElement("ul", {
    className: Styles$1.list
  }, items.map(function (text, index) {
    return React.createElement("li", {
      className: Styles$1.listItem,
      key: index
    }, parseText(text));
  })) : React.createElement("ol", {
    className: Styles$1.list
  }, items.map(function (text, index) {
    return React.createElement("li", {
      className: Styles$1.listItem,
      key: index
    }, parseText(text));
  }));
};

var css_248z$2 = ".Paragraph-module_paragraph__EUUsG{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;line-height:1.6em;margin:1rem 0;outline:none}";
var Styles$2 = {"paragraph":"Paragraph-module_paragraph__EUUsG"};
styleInject(css_248z$2);

var Paragraph = function Paragraph(_ref) {
  var text = _ref.text;
  return React.createElement("p", {
    className: Styles$2.paragraph
  }, parseText(text));
};

var css_248z$3 = ".Image-module_figure__WhosY{margin:0;width:100%}.Image-module_stretched__woaj8{margin:0;width:none}.Image-module_background__F38pv{background:#cdd1e0;padding:15px 139px}.Image-module_backgroundBorder__YPPFw{border:1px solid #e8e8eb}.Image-module_image__Zq9Zs{width:100%}.Image-module_imageBorder__gX9Cl{border:1px solid #e8e8eb}.Image-module_caption__RdztU{border:1px solid #e6e6e6;box-sizing:border-box;display:inline-block;margin:1rem 0;padding:.5rem 1.5rem;text-align:left;width:100%}";
var Styles$3 = {"figure":"Image-module_figure__WhosY","stretched":"Image-module_stretched__woaj8","background":"Image-module_background__F38pv","backgroundBorder":"Image-module_backgroundBorder__YPPFw Image-module_background__F38pv","image":"Image-module_image__Zq9Zs","imageBorder":"Image-module_imageBorder__gX9Cl Image-module_image__Zq9Zs","caption":"Image-module_caption__RdztU"};
styleInject(css_248z$3);

var Image = function Image(_ref) {
  var file = _ref.file,
    caption = _ref.caption,
    _ref$withBorder = _ref.withBorder,
    withBorder = _ref$withBorder === void 0 ? false : _ref$withBorder,
    _ref$withBackground = _ref.withBackground,
    withBackground = _ref$withBackground === void 0 ? false : _ref$withBackground,
    _ref$stretched = _ref.stretched,
    stretched = _ref$stretched === void 0 ? false : _ref$stretched;
  return React.createElement("figure", {
    className: stretched ? Styles$3.stretched : Styles$3.figure
  }, withBackground ? React.createElement("div", {
    className: !withBorder ? Styles$3.background : Styles$3.backgroundBorder
  }, React.createElement("img", {
    src: file.url,
    className: !withBorder ? Styles$3.image : Styles$3.imageBorder,
    alt: caption
  })) : React.createElement("img", {
    src: file.url,
    className: !withBorder ? Styles$3.image : Styles$3.imageBorder,
    alt: caption
  }), caption && React.createElement("figcaption", {
    className: Styles$3.caption
  }, caption));
};

var css_248z$4 = ".Delimiter-module_delimiter__zh9sr{color:#313649;font-size:55px;letter-spacing:.005em;margin:1rem 0;text-align:center;width:100%}.Delimiter-module_delimiter__zh9sr:before{content:\"***\";display:inline-block;font-size:30px;height:30px;letter-spacing:.2em}";
var Styles$4 = {"delimiter":"Delimiter-module_delimiter__zh9sr"};
styleInject(css_248z$4);

var Delimiter = function Delimiter() {
  return React.createElement("div", {
    className: Styles$4.delimiter
  });
};

var css_248z$5 = ".Code-module_code__arLxg{-webkit-overflow-scrolling:touch;background:#f4f4f4;border:1px solid #ddd;border-left:4px solid #8a8a8a;color:#666;display:block;line-height:1.6;margin:1rem 0;max-width:100%;min-width:100px;overflow:scroll;padding:1rem 1.5rem;page-break-inside:avoid;resize:vertical;white-space:pre}";
var Styles$5 = {"code":"Code-module_code__arLxg"};
styleInject(css_248z$5);

var Code = function Code(_ref) {
  var code = _ref.code;
  return React.createElement("pre", null, React.createElement("code", {
    className: Styles$5.code
  }, code));
};

var css_248z$6 = ".RawTool-module_rawTool__7-kbB{-webkit-overflow-scrolling:touch;background:#2a2a2a;border:1px solid #2a2a2a;color:#fff;display:block;line-height:1.6;margin:1rem 0;max-width:100%;min-width:100px;overflow:scroll;padding:1rem 1.5rem;page-break-inside:avoid;resize:vertical;white-space:pre}";
var Styles$6 = {"rawTool":"RawTool-module_rawTool__7-kbB"};
styleInject(css_248z$6);

var RawTool = function RawTool(_ref) {
  var html = _ref.html;
  return React.createElement("pre", null, React.createElement("code", {
    className: Styles$6.rawTool
  }, html));
};

var css_248z$7 = ".Quote-module_figure__NqW4y{margin:0;width:100%}.Quote-module_blockquote__b4im4{margin:0}.Quote-module_centeredQuote__fpH6U{text-align:center}.Quote-module_paragraph__l9Wk-{background:#eee;border-radius:5px;display:block;font-style:oblique;line-height:1.6;margin:1rem 0;max-width:100%;padding:1rem 1.5rem;white-space:pre}";
var Styles$7 = {"figure":"Quote-module_figure__NqW4y","blockquote":"Quote-module_blockquote__b4im4","centeredQuote":"Quote-module_centeredQuote__fpH6U Quote-module_blockquote__b4im4","paragraph":"Quote-module_paragraph__l9Wk-"};
styleInject(css_248z$7);

var Quote = function Quote(_ref) {
  var text = _ref.text,
    caption = _ref.caption,
    alignment = _ref.alignment;
  var isTextCentered = useMemo(function () {
    return alignment === 'center';
  }, []);
  return React.createElement("figure", {
    className: Styles$7.figure
  }, React.createElement("blockquote", {
    className: isTextCentered ? Styles$7.centeredQuote : Styles$7.blockquote
  }, React.createElement("p", {
    className: Styles$7.paragraph
  }, parseText(text))), React.createElement("figcaption", null, "\u2014 ", parseText(caption)));
};

var css_248z$8 = ".Table-module_wrapper__Qd7Cl{overflow-x:auto}.Table-module_table__Dkosn{border-collapse:collapse;margin:1rem 0;max-width:100%;overflow:scroll;width:100%}.Table-module_tdBorderless__q5nCu,.Table-module_td__jv9tA{border:1px solid #e8e8eb;padding:.5rem}.Table-module_tdBorderless__q5nCu{border-left:none;border-right:none}";
var Styles$8 = {"wrapper":"Table-module_wrapper__Qd7Cl","table":"Table-module_table__Dkosn","td":"Table-module_td__jv9tA","tdBorderless":"Table-module_tdBorderless__q5nCu"};
styleInject(css_248z$8);

var Table = function Table(_ref) {
  var _heading$;
  var withHeadings = _ref.withHeadings,
    content = _ref.content;
  var _content = content.slice();
  var heading = withHeadings ? _content.splice(0, 1) : [];
  return React.createElement("div", {
    className: Styles$8.wrapper
  }, React.createElement("table", {
    className: Styles$8.table
  }, withHeadings && React.createElement("thead", {
    className: Styles$8.tr
  }, React.createElement("tr", null, (_heading$ = heading[0]) == null ? void 0 : _heading$.map(function (text, index) {
    return React.createElement("th", {
      key: text + "-" + index,
      className: index === 0 || index === heading[0].length - 1 ? Styles$8.tdBorderless : Styles$8.td
    }, parse(text));
  }))), React.createElement("tbody", null, _content.map(function (row, index) {
    return React.createElement("tr", {
      key: "row-" + index,
      className: Styles$8.tr
    }, row.map(function (text, index) {
      return React.createElement("td", {
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
  return React.createElement(React.Fragment, null, data == null ? void 0 : (_data$blocks = data.blocks) == null ? void 0 : _data$blocks.map(function (item) {
    var type = item.type,
      data = item.data,
      id = item.id;
    switch (type) {
      case HEADER_KEY:
        return React.createElement(Header, {
          key: id,
          level: data.level,
          text: data.text
        });
      case PARAGRAPH_KEY:
        return React.createElement(Paragraph, {
          key: id,
          text: data.text
        });
      case LIST_KEY:
        return React.createElement(List, {
          key: id,
          items: data.items,
          style: data.style
        });
      case DELIMITER_KEY:
        return React.createElement(Delimiter, {
          key: id
        });
      case IMAGE_KEY:
        return React.createElement(Image, {
          key: id,
          file: data.file,
          caption: data.caption,
          withBorder: data.withBorder,
          withBackground: data.withBackground,
          stretched: data.stretched
        });
      case CODE_KEY:
        return React.createElement(Code, {
          key: id,
          code: data.code
        });
      case RAW_TOOL_KEY:
        return React.createElement(RawTool, {
          key: id,
          html: data.html
        });
      case QUOTE_KEY:
        return React.createElement(Quote, {
          key: id,
          text: data.text,
          caption: data.caption,
          alignment: data.alignment
        });
      case TABLE_KEY:
        return React.createElement(Table, {
          key: id,
          content: data.content,
          withHeadings: data.withHeadings
        });
      default:
        return React.createElement("div", {
          key: ERROR_KEY
        }, "Error!");
    }
  }));
};

export { Code, Delimiter, Header, Image, List, Paragraph, Parser, Quote, RawTool, Table };
//# sourceMappingURL=editor-js-render-no-styles.esm.js.map
