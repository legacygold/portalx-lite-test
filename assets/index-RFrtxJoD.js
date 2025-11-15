import{n as g,r as w,q as f,x as n,o as $}from"./index-Cr641yrG.js";import{n as o,c as b}from"./index-jOu9Tj9s.js";import{o as m}from"./if-defined-CzFkf9ny.js";import"./index-IkEvz7-_.js";import"./index-D_vg7Iji.js";import"./index-2IBCr20q.js";const x=g`
  :host {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: 2px;
  }
`;var y=function(e,t,l,s){var u=arguments.length,a=u<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,l):s,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,l,s);else for(var c=e.length-1;c>=0;c--)(d=e[c])&&(a=(u<3?d(a):u>3?d(t,l,a):d(t,l))||a);return u>3&&a&&Object.defineProperty(t,l,a),a};const h=4;let p=class extends f{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<h;return n`${this.walletImages.slice(0,h).map(({src:l,walletName:s})=>n`
          <wui-wallet-image
            size="sm"
            imageSrc=${l}
            name=${m(s)}
          ></wui-wallet-image>
        `)}
    ${t?[...Array(h-this.walletImages.length)].map(()=>n` <wui-wallet-image size="sm" name=""></wui-wallet-image>`):null} `}};p.styles=[w,x];y([o({type:Array})],p.prototype,"walletImages",void 0);p=y([b("wui-all-wallets-image")],p);const v=g`
  :host {
    width: 100%;
  }

  button {
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button > wui-wallet-image {
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true']:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: ${({tokens:e})=>e.core.glass010};
    color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  wui-flex.namespace-icon {
    width: 16px;
    height: 16px;
    border-radius: ${({borderRadius:e})=>e.round};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.backgroundPrimary};
    transition: box-shadow var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2);
  }

  button:hover:enabled wui-flex.namespace-icon {
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-flex.namespace-icon > wui-icon {
    width: 10px;
    height: 10px;
  }

  wui-flex.namespace-icon:not(:first-child) {
    margin-left: -4px;
  }
`;var r=function(e,t,l,s){var u=arguments.length,a=u<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,l):s,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,l,s);else for(var c=e.length-1;c>=0;c--)(d=e[c])&&(a=(u<3?d(a):u>3?d(t,l,a):d(t,l))||a);return u>3&&a&&Object.defineProperty(t,l,a),a};const I={eip155:"ethereum",solana:"solana",bip122:"bitcoin",polkadot:void 0,cosmos:void 0,sui:void 0,stacks:void 0,ton:"ton"};let i=class extends f{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.namespaces=[],this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return this.dataset.size=this.size,n`
      <button
        ?disabled=${this.disabled}
        data-all-wallets=${this.showAllWallets}
        tabindex=${m(this.tabIdx)}
      >
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-flex flexDirection="column" justifyContent="center" alignItems="flex-start" gap="1">
          <wui-text variant="lg-regular" color="inherit">${this.name}</wui-text>
          ${this.templateNamespaces()}
        </wui-flex>
        ${this.templateStatus()}
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}templateNamespaces(){return this.namespaces?.length?n`<wui-flex alignItems="center" gap="0">
        ${this.namespaces.map((t,l)=>n`<wui-flex
              alignItems="center"
              justifyContent="center"
              zIndex=${(this.namespaces?.length??0)*2-l}
              class="namespace-icon"
            >
              <wui-icon
                name=${m(I[t])}
                size="sm"
                color="default"
              ></wui-icon>
            </wui-flex>`)}
      </wui-flex>`:null}templateAllWallets(){return this.showAllWallets&&this.imageSrc?n` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?n` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?n`<wui-wallet-image
        size=${m(this.size==="sm"?"sm":"md")}
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?n`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.loading?n`<wui-loading-spinner size="lg" color="accent-primary"></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?n`<wui-tag size="sm" variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:null}};i.styles=[w,$,v];r([o({type:Array})],i.prototype,"walletImages",void 0);r([o()],i.prototype,"imageSrc",void 0);r([o()],i.prototype,"name",void 0);r([o()],i.prototype,"size",void 0);r([o()],i.prototype,"tagLabel",void 0);r([o()],i.prototype,"tagVariant",void 0);r([o()],i.prototype,"walletIcon",void 0);r([o()],i.prototype,"tabIdx",void 0);r([o({type:Array})],i.prototype,"namespaces",void 0);r([o({type:Boolean})],i.prototype,"disabled",void 0);r([o({type:Boolean})],i.prototype,"showAllWallets",void 0);r([o({type:Boolean})],i.prototype,"loading",void 0);r([o({type:String})],i.prototype,"loadingSpinnerColor",void 0);i=r([b("wui-list-wallet")],i);
