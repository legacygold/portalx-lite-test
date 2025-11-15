import{n as s,r as u,o as f,q as w,x as d}from"./index-C7JdSTGr.js";import{c as x}from"./index-II9nfPMD.js";const m="https://reown.com",p=s`
  .reown-logo {
    height: 24px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({tokens:t})=>t.theme.textSecondary};
  }

  a:hover {
    opacity: 0.9;
  }
`;var y=function(t,n,o,r){var i=arguments.length,e=i<3?n:r===null?r=Object.getOwnPropertyDescriptor(n,o):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(t,n,o,r);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(e=(i<3?a(e):i>3?a(n,o,e):a(n,o))||e);return i>3&&e&&Object.defineProperty(n,o,e),e};let l=class extends w{render(){return d`
      <a
        data-testid="ux-branding-reown"
        href=${m}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="1"
          .padding=${["01","0","3","0"]}
        >
          <wui-text variant="sm-regular" color="inherit"> UX by </wui-text>
          <wui-icon name="reown" size="inherit" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};l.styles=[u,f,p];l=y([x("wui-ux-by-reown")],l);
