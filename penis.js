  (() = >{"use strict";
  const e =  {
    args : [e = > {
      const t = Object.call,n = t.bind(t),o = !(console.exception || ![].at);
      return {
        __proto__ : null,sourceWindow : e,F_c : n,F_a : Object.apply,F_b : Object.bind,F_tS : Function.toString,A_fE : [].forEach,A_so : [].some,A_sp : [].splice,A_sh : [].shift,A_j : [].join,A_po : [].pop,A_m : [].map,A_f : [].filter,A_iO : [].indexOf,A_iA : Array.isArray,O_a : Object.assign,O_k : Object.keys,O_v : Object.values,O_dP : Object.defineProperties,O_dPy : Object.defineProperty,O_hOP : Object.hasOwnProperty,O_gOPN : Object.getOwnPropertyNames,O_gOPD : Object.getOwnPropertyDescriptor,O_gOPDs : Object.getOwnPropertyDescriptors,O_gPO : Object.getPrototypeOf,O_tS :  {
        }
        .toString,J_p : JSON.parse,J_s : JSON.stringify,c_l : o?console.log : null,c_i : o?console.info : null,c_w : o?console.warn : null,c_e : o?console.error : null,c_d : o?console.debug : null,M_f : Math.floor,M_r : Math.random,M_m : Math.max,M_i : MutationEvent.prototype.initMutationEvent,M_pA : MutationEvent.prototype.ADDITION,M_pAT : MutationEvent.AT_TARGET,N_tS : (0).toString,N_MSI : Number.MAX_SAFE_INTEGER,P_r : Promise.resolve,P_t : Promise.prototype.then,P_c : Promise.prototype.catch,R_rABS : FileReader.prototype.readAsBinaryString,R_rAT : FileReader.prototype.readAsText,R_enq : e.ReadableStreamDefaultController ? e.ReadableStreamDefaultController.prototype.enqueue : null,R_cl : e.ReadableStreamDefaultController ? e.ReadableStreamDefaultController.prototype.close : null,S_fCC : String.fromCharCode,S_m_nr : "".match,S_sl:"".slice,S_su : "".substr,S_se_nr : "".search,S_sp_nr : "".split,S_tr : "".trim,S_r_nr : "".replace,S_rA_nr : "".replaceAll,S_cCA : "".charCodeAt,S_tLC : "".toLowerCase,S_tUC : "".toUpperCase,Y_tST : Symbol.toStringTag,D_pFS : DOMParser.prototype.parseFromString,U_cOU : URL.createObjectURL,U_rOU : URL.revokeObjectURL,X_o : XMLHttpRequest.prototype.open,X_pSD : XMLHttpRequest.prototype.DONE,X_pSH : XMLHttpRequest.prototype.HEADERS_RECEIVED,X_pSL : XMLHttpRequest.prototype.LOADING,X_pSO : XMLHttpRequest.prototype.OPENED,X_pSU : XMLHttpRequest.prototype.UNSENT,X_s : XMLHttpRequest.prototype.send,D_n : Date.now,I_tS : e=>""+e,parseInt,parseFloat,CustomEvent,KeyboardEvent,MouseEvent,MutationEvent,console,Error,Uint8Array,Blob,Number,String,Proxy,Window,encodeURIComponent,decodeURIComponent,encodeURI,decodeURI,escape,unescape,atob,btoa,postMessage,dispatchEvent,addEventListener,removeEventListener,alert,prompt,confirm,close,getElementById : e.Document.prototype.getElementById,createEvent : e.Document.prototype.createEvent,createElement : e.Document.prototype.createElement
      }
      },(e,t) = > {
        const {
          F_c : n,F_a : o,O_dPy : r,O_a : s,O_gOPD : a,O_gOPN : i,O_gPO : c
        }
        =e, {
          F_c : l,F_b : d,F_tS : u,A_fE : p,A_so : m,A_sh : g,A_j : f,A_po : _,A_m : v,A_f : h,A_iO : b,A_iA : y,O_a : w,O_k : M,O_v : E,O_dP : x,O_dPy : S,O_hOP : L,O_gOPN : O,O_gOPD : C,O_gOPDs : T,O_gPO : R,O_tS : U,J_p : A,J_s : P,c_l : I,c_i : D,c_w : k,c_e : N,c_d : G,M_f : j,M_r : F,M_m : $,M_i : V,M_pA : q,M_pAT : B,N_tS : X,N_MSI : H,P_t : J,P_c : W,R_rABS : K,R_rAT : Y,R_enq : z,R_cl : Q,S_fCC : Z,S_m_nr : ee,S_sl : te,S_su : ne,S_se_nr : oe,S_sp_nr : re,S_tr : se,S_r_nr : ae,S_rA_nr : ie,S_cCA : ce,S_tLC : le,S_tUC : de,Y_tST : ue,D_pFS : pe,U_cOU : me,U_rOU : ge,X_o : fe,X_s : _e,X_pSD : ve,X_pSH : he,X_pSL : be,X_pSO : ye,X_pSU : we,D_n : Me,I_tS : Ee,parseInt : xe,parseFloat : Se,console : Le,encodeURIComponent : Oe,decodeURIComponent : Ce,encodeURI : Te,decodeURI : Re,escape : Ue,unescape : Ae,atob : Pe,btoa : Ie,postMessage : De,dispatchEvent : ke,addEventListener : Ne,removeEventListener : Ge,alert : je,prompt : Fe,confirm : $e,close : Ve,getElementById : qe,createEvent : Be,createElement : Xe,CustomEvent : He,KeyboardEvent : Je,MouseEvent : We,MutationEvent : Ke,Uint8Array : Ye,Blob : ze,Number : Qe,String : Ze,Proxy : et,Window : tt
        }
        =e,nt = (e,t,r) = >n(o,e,t,r),ot = e=>s( {
          __proto__ : null
        }
        ,e),rt = (e,t,n) = >(r(e,t,ot( {
          value : n,configurable : !0,enumerable : !0,writable : !0
        }
        )),e),st = (e,t) = >ft(e,t) ? e[t]:void 0,at = (e,t) = > {
          const n = a(e,t);
          return n ? ot(n).value : void 0
        }
        ,it = e=> {
          const t = (t,...n) = >nt(e,t,n);
          return rt(t,"wrappedJSObject",e),t
        }
        ,ct = () = >e = >it(e),lt = ct()(d),dt = (e,t,n) = > {
          const o = e.length;
          let r = t || 0;
          if(r>=o)return[];
          r<0 && (r = $(0,o+r));
          let s = void 0 === n ? o:n;
          s<0 && (s = $(0,o+s)),s>o && (s = o);
          const a = ot( {
          }
          );
          for(let t = r;
          t<s;
          t++)a[t]=at(e,t);
        return E(a)}
        ,ut = ct()(f),pt = (e,...t) = > {
          const n = e.length,o = ot(e);
          for(let e = 0;
          e<t.length;
          e++) {
            const r = t[e],s = y(r) ? r:[r];
            for(let e = 0;
            e<s.length;
          e++)o[n+e]=at(s,e)}
        return E(o)}
        ,mt = ct()(b),gt = ct()(p),ft = ct()(L),_t = ct()(re),vt = ct()(te),ht = it(U),bt = c( {
        }
        ),yt = e=> {
          const t = ot(e),n = i(t);
          for(let e = 0;
          e<n.length;
          e++) {
            const o = n[e],r = t[o];
          null !== r && "object "== typeof r && c(r) === bt && (t[o]=yt(r))}
          return t
        }
        ,wt = (Mt = ot( {
        a : "decodeURI",b : "Component"}
        )).a+Mt.b;
        var Mt;
        const Et = I?void 0 : st(t,"console");
        return ot( {
          cSO : ot,pO : yt,gOP : st,gOPV : at,sOP : rt,tT : e=> {
            const t = _t(ht(e,ot( {
            }
            ))," ");
          return vt(ut(dt(t,1)," "),0,-1)}
          ,f : ot( {
            call : n,F_a : nt,F_c : l,F_b : lt,F_tS : ct()(u),A_fE : gt,A_sl : dt,A_so : ct()(m),A_sp : (e,t,n,...o) = > {
              const r = o || [],s = dt(e,0,t),a = dt(e,t,n),i = dt(e,t+n);
              let c = pt([],s);
              return c = pt(c,r),c = pt(c,i),ot( {
                result : c,removed : a
              }
            )}
            ,A_sh : ct()(g),A_j : ut,A_po : ct()(_),A_m : ct()(v),A_c : pt,A_f : ct()(h),A_iO : mt,O_a : w,O_k : M,O_dP : x,O_dPy : S,O_hOP : L,O_gOPN : O,O_gOPD : C,O_gOPDs : T || (e = > {
              const t = ot( {
              }
              );
              for(const n in e)t[n]=a(e,n);
              return t
            }
            ),O_gPO : R,O_tS : ht,J_p : A,J_s : e=> {
              const t = (e,n) = > {
                let o;
                if(null === e)o = "null";
                else if("object "== typeof e) {
                  if(n) {
                    if(- 1!= mt(n,e))throw"Converting circular structure to JSON";
                  rt(n,n.length,e)}
                  else n = [e];
                  if(y(e)) {
                    let r = "";
                    for(let o = 0;
                    o<e.length;
                    o++) {
                      const s = t(st(e,o),n);
                      r += `$ {
                      o ? "," : ""}
                      $ {
                        void 0 === s ? "null" : s
                      }
                    `}
                    o = `[$ {
                      r
                    }
                  ]`}
                  else {
                    let r = "";
                    gt(M(e),o = > {
                      const s = t(e[o],n);
                      void 0 !== s && (r += `$ {
                      r ? "," : ""}
                      $ {
                      P(o)}
                      :$ {
                        s
                      }
                    `)}
                    ),o = ` {
                      ${r
                      }
                    }`}
                    n.length -= 1
                  }
                  else o = P(e);
                  return o
                }
                ;
              return t(e)}
              ,c_l : I || st(Et,"log") || (() = > {
              }
              ),c_i : D || st(Et,"info") || (() = > {
              }
              ),c_w : k || st(Et,"warn") || (() = > {
              }
              ),c_e : N || st(Et,"error") || (() = > {
              }
              ),c_d : G || st(Et,"debug") || (() = > {
              }
              ),M_f : j,M_r : F,M_m : $,M_i : ct()(V),M_pA : q,M_pAT : B,N_tS : ct()(X),N_MSI : H,P_r : async e = >e,P_t : ct()(J),P_c : ct()(W),R_rABS : ct()(K),R_rAT : ct()(Y),R_enq : z?ct()(z) : z,R_cl : Q?ct()(Q) : Q,S_fCC : Z,S_m_nr : ct()(ee),S_sl : vt,S_su : ct()(ne),S_se_nr : ct()(oe),S_sp_nr : _t,S_tr : ct()(se),S_r_nr : ct()(ae),S_rA_nr : ct()(ie || function(e,t) {
              return ut(_t(this,e),t)}
              ),S_cCA : ct()(ce),S_tLC : ct()(le),S_tUC : ct()(de),Y_tST : ue,D_pFS : it(pe),U_cOU : me,U_rOU : ge,X_o : ct()(fe),X_s : ct()(_e),X_pSD : ve,X_pSH : he,X_pSL : be,X_pSO : ye,X_pSU : we,D_n : Me,I_tS : Ee
            }
            ),w_o : ot( {
              Proxy : et,Window : tt,Number : Qe,String : Ze
            }
            ),w : ot( {
              console : Le,CustomEvent : He,KeyboardEvent : Je,MouseEvent : We,MutationEvent : Ke,Uint8Array : Ye,Blob : ze,Promise : at(c((async() = > {
              }
            )()),"constructor"),Array : at(c([]),"constructor"),eval : at(t,"eval")}
            ),w_f : ot( {
              encodeURIComponent : Oe,[wt]:Ce,encodeURI : Te,decodeURI : Re,escape : Ue,unescape : Ae,atob : Pe,btoa : Ie,parseInt : xe,parseFloat : Se,postMessage : De,dispatchEvent : ke,addEventListener : Ne,removeEventListener : Ge,alert : je,prompt : Fe,confirm : $e,close : Ve
            }
            ),w_w : ot( {
              FileReader : !0,DOMParser : !0,ReadableStream : !0,XMLHttpRequest : !0,JSON : !0,Math : !0,Date : !0,Event : !0,CustomEvent : !0,KeyboardEvent : !0,MouseEvent : !0,MutationEvent : !0,Error : !0,Uint8Array : !0,Promise : !0,Object : !0,Blob : !0,Array : !0,Number : !0,String : !0
            }
            ),d_b : ot( {
              getElementById : qe,createEvent : Be,createElement : Xe,dispatchEvent : ke,addEventListener : Ne,removeEventListener : Ge
            }
          )}
        )}
        ,(e,t,n) = > {
          const {
            cSO : o,sOP : r,gOP : s,gOPV : a,tT : i,w_o :  {
              Proxy : c,Number : l
            }
            ,f :  {
              A_f : d,A_c : u,A_fE : p,F_b : m,O_a : g,O_k : f,O_gPO : _,O_dPy : v,O_gOPD : h,O_gOPDs : b,N_MSI : y,S_su : w,Y_tST : M,F_a : E
            }
            }=e,x = (e = > {
              let t = o( {
              }
              );
              const n = (e,o,r) = > {
                const s = _(e);
              nul l== s|| s === o || --r<0 || (n(s,e,r),t = g(t,b(e)))}
              ;
              return n(e,null,5),t
            }
            )(t);
            return o( {
              createProxy : e=> {
                let _ = x;
                const S = e=> {
                  let t,n;
                  const r = (t = h(A,e)) || (n = _[e]);
                  return o( {
                    d : r,l : !!t,w : !!n
                  }
                )}
                ,L = e=> {
                  if(!C(e))return!1;
                  if("length" === e)return!0;
                  const t = l(e);
                  return t>=0 && t<=y && e === ""+t
                }
                ,O = e=>"on" === w(e,0,2),C = e=>"string "== typeof e,T = (e,t) = > {
                  const o = w(e,2),r = U[o];
                  if(r && (n.removeEventListener(o,r),delete U[o]),t && (e = >"function "== typeof e)(t)) {
                    const e = (...e) = >E(t,n,e);
                    n.addEventListener(o,e),U[o]=e
                  }
                  },R = o( {
                    addEventListener : !0,alert : !0,atob : !0,blur : !0,btoa : !0,cancelAnimationFrame : !0,cancelIdleCallback : !0,captureEvents : !0,clearInterval : !0,clearTimeout : !0,close : !0,confirm : !0,createImageBitmap : !0,dispatchEvent : !0,dump : !0,fetch : !0,find : !0,focus : !0,getComputedStyle : !0,getDefaultComputedStyle : !0,getSelection : !0,matchMedia : !0,moveBy : !0,moveTo : !0,open : !0,openDatabase : !0,postMessage : !0,print : !0,prompt : !0,queueMicrotask : !0,releaseEvents : !0,removeEventListener : !0,requestAnimationFrame : !0,requestIdleCallback : !0,resizeBy : !0,resizeTo : !0,scroll : !0,scrollBy : !0,scrollByLines : !0,scrollByPages : !0,scrollTo : !0,setInterval : !0,setResizable : !0,setTimeout : !0,sizeToContent : !0,stop : !0,updateCommands : !0,webkitCancelAnimationFrame : !0,webkitRequestAnimationFrame : !0,webkitRequestFileSystem : !0,webkitResolveLocalFileSystemURL : !0
                  }
                  );
                  p(f(R),t = > {
                    e[t]=e[t] || o( {
                      bind : !0
                    }
                  )}
                  );
                  const U = o( {
                  }
                  ),A = o( {
                  }
                  );
                  r(A,M,"Window");
                  const P = new c(A,o( {
                    defineProperty : (n,r,s) = > {
                      const {
                        d : a,l : i
                      }
                      =S(r),c = o(s);
                    return a && !a.configurable && (!!a.configurabl e!= !!c.configurable || !!a.enumerabl e!= !!a.enumerable) || L(r) ? (v(i ? A:t,r,c),!1) : (v(A,r,c),C(r) && O(r) && T(r),delete e[r],!0)}
                    ,deleteProperty : (t,n) = > {
                      let {
                        d : r,l : s,w : a
                      }
                      =S(n);
                      return!(!r || !r.configurable) && (s && (s = delete A[n],C(n) && O(n) && T(n)),(a || (r = _[n]) && r.configurable) && (x === _ && (_ = g(o( {
                      }
                    ),x)),a = delete _[n]),delete e[n],s || a)}
                    ,get : (n,r) = > {
                      const a = e[r];
                      if(a) {
                        if("value"in a)return a.value;
                      if(a.get)return a.get()}
                      const {
                        d : i,l : c
                      }
                      =L(r) ? o( {
                        d : h(t,r),l : !1
                      }
                      ) : S(r);
                      if(i) {
                        let e;
                        const n = "value"in i ? s(i,"value") : (e = s(i,"get")) && "function "== typeof e ? c?e() : m(e,t)() : void 0;
                        return a && a.bind ? m(n,t) : c || "event "== r ? n:n === t ? P:n
                      }
                      },getOwnPropertyDescriptor : (n,r) = > {
                        let {
                          d : s,l : a
                        }
                        =S(r);
                        if(!s) {
                          const n = e[r];
                          if(n)return o( {
                            enumerable : !0,configurable : !0,writable : !0,value : n.value,set : n.set,get : n.get
                          }
                          );
                          if(!L(r))return;
                          s = h(t,r),a = !1
                        }
                        const i = g(o( {
                        }
                        ),s);
                        if(i.value === t && (i.value = P),!a) {
                          const e = i.get;
                          e && (i.get = () = > {
                            const n = m(e,t)();
                            return n === t ? P:n
                          }
                        ),i && !i.configurable && v(A,r,i)}
                        return i
                      }
                      ,has : (t,n) = >n in A || n in e || n in _,ownKeys : () = > {
                        const e = e=>!(e in _),n = f(_),r = d(f(b(A)),e),s = o( {
                        }
                        );
                        for(let e = 0;
                        "Window" === i(a(t,e));
                        e += 1)s[e]=!0;
                        const c = d(f(s),e);
                      return u(n,r,c)}
                      ,preventExtensions : () = >!0,set : (t,n,o) = > {
                        const a = e[n];
                        if(a && a.set)return a.set(o),!0;
                        const {
                          d : i
                        }
                        =S(n);
                      return!(i && !i.writable && !s(i,"set") || L(n) || (delete e[n],r(A,n,o),C(n) && O(n) && T(n,o),0))}
                    }));
                    return P
                  }
                })}
                ],backup : (e,t,n,o,r,s,a) = > {
                  const i = e[n],c = s(i || r(e),e);
                  i && delete e[n];
                  const {
                    c_e : l,c_w : d,F_a : u,F_b : p,A_c : m,A_fE : g,J_s : f,J_p : _,O_k : v,M_i : h,M_pA : b,M_r : y,N_tS : w
                  }
                  =c.f, {
                    cSO : M,pO : E,gOP : x,gOPV : S,sOP : L,tT : O
                  }
                  =c,C = M( {
                    ...c.w,...c.w_o
                  }
                  ),T = M( {
                    ...c.w
                  }
                  ),R = M( {
                  }
                  );
                  g(v(c.w_w),async t = > {
                    if(!T[t])try {
                      const n = S(e,t);
                    void 0 !== n && (T[t]=n)}
                    catch(e) {
                    d(e)}
                  });
                  const U = e=>!("prototype"in e),A = S,P = M( {
                    createID : () = >w(y()+1,36),arrayGet : A
                  }
                  ),I = (e,t) = > {
                    if((l || console.error)(`Tampermonkey sandbox preparation $ {
                    t ? "("+t+") " : ""}
                    failed. This usually is caused by a third - party extension.`,e),t)return() = > {
                    }
                    },D = e=> {
                      g(v(c.d_b),t = > {
                        try {
                          const n = c.d_b[t];
                          R[t]=function() {
                          return u(n,e,arguments)}
                          }catch(e) {
                          R[t]=I(e,"document."+t)}
                        })}
                        , {
                          createProxy : k
                        }
                        =a(c,e,C);
                        let N,G = M( {
                          backup : c,safeWindow : C,sandboxWindow : T,safeDocument : R,cSO : M,pO : E,gOPV : S,gOP : x,sOP : L,Context : M( {
                            D : o,Helper : P,cP : k,tT : O,cSD : D,pageLoaded : void 0,domContentLoaded : void 0,domLoaded : void 0,Message : void 0
                          }
                          ),exec_eval : void 0,exec_fn : (t,n,o) = > {
                            const r = p(C.eval,e)(`(() = > function() {
                              ${t
                              }
                            })()`);
                          u(r,n,o)}
                          ,exec_csp : (e,t,n) = > {
                            const o = "__u__"+(19831206*y()+1);
                            N.send("csp",M( {
                              id : o,src : e
                            }
                          )),G.exec_script(o,t,n)}
                          ,exec_script : (t,n,o) = > {
                            const r = e[t];
                          r ? (delete e[t],u(r,n,o)) : e.console.error("Tampermonkey script execution failed")}
                        });
                        try {
                          (() = > {
                            const n = M( {
                              ...c.f,i_N : U,E_u : function(t,n,o) {
                                if(G.exec_eval && C.eval)try {
                                  const r = "__u__"+(19831206*y()+1);
                                  return e[r]=n,p(C.eval,e)(o ? `(function(that) {
                                    ${t
                                    }
                                    })((() = > {
                                      const k = "$ {
                                        r
                                      }
                                      ",r = this[k];
                                      delete this[k];
                                      return r;
                                    }
                                  )())`:t)}
                                  catch(t) {
                                    try {
                                    G.exec_eval = p(C.eval,e)("true")}
                                    catch(e) {
                                      G.exec_eval = !1
                                    }
                                    if(G.exec_eval)throw t
                                  }
                                  return G.exec_csp(o ? `(function(that) {
                                    ${t
                                    }
                                  })(this)`:t,o ? n:e)}
                                });
                                g(v(n),e = > {
                                  try {
                                  G.Context[e]=n[e]}
                                  catch(t) {
                                  G.Context[e]=I(t,"internal."+e)}
                                  }),g(v(c.w_f),t = > {
                                    try {
                                      const n = c.w_f[t];
                                      C[t]=T[t]=function() {
                                      return u(n,e,arguments)}
                                      }catch(e) {
                                      C[t]=T[t]=I(e,"window."+t)}
                                      }),g(["frames","self","top","document","location"],t = > {
                                        try {
                                        C[t]=T[t]=e[t]}
                                        catch(e) {
                                        C[t]=T[t]=I(e,"window."+t)}
                                      }),D(t)}
                                    )()}
                                    catch(e) {
                                    return I(e)}
                                    try {
                                      N = (( {
                                        CustomEvent : t,dispatchEvent : n,addEventListener : o,removeEventListener : r
                                      }
                                      , {
                                        createEvent : s
                                      }
                                      ) = > {
                                        let a,i,c,l,d = 1;
                                        const p = M( {
                                        }
                                        );
                                        let v = [];
                                        const y = e=> {
                                          const t = ++d;
                                          return p[d]=e,t
                                        }
                                        ,w = (o,r) = > {
                                          const {
                                            m : a,a : i,r : c,n : l
                                          }
                                          =r,d = ((e,n,o) = > {
                                            let r;
                                            return o ? (r = s("MutationEvent"),h(r,e,!1,!1,o || null,null,null,f(n),b)) : r=new t(e,M( {
                                              detail : n
                                            }
                                            )),r
                                          }
                                          )(o,M( {
                                            m : a,a : i,r : c
                                          }
                                          ),l);
                                        u(n,e,[d])}
                                        ;
                                        let x = e=> {
                                          const t = E("CustomEvent "== O(n = e) ? n.detail : _(n.attrName));
                                          var n;
                                          if("message.response "== t.m)((e,t) = > {
                                            let n;
                                          e && (n = p[e]) && (n(t),delete p[e])}
                                          )(t.r,t.a);
                                          else if(a) {
                                            const n = t.r ? e=> {
                                              w(c,M( {
                                                m : "message.response",a : e,r : t.r
                                              }
                                            ))}
                                            :() = > {
                                            }
                                            ;
                                            !1 === a(M( {
                                              method : t.m,args : t.a,node : "MutationEvent" === O(e) ? e.relatedNode : void 0,sendResponse : n
                                            }
                                          )) && (v = m(v,e))}
                                        };
                                        const S = t=> {
                                          t && (l = t,c = "2C_"+l,i = "2P_"+l),u(o,e,[i,x,M( {
                                            capture : !0
                                          }
                                        )])}
                                        ,L = M( {
                                          init : e=> {
                                          l ? S() : S(e)}
                                          ,switchId : e=> {
                                          l && L.cleanup(),S(e)}
                                          ,send : (...e) = > {
                                            let t,n,o,r;
                                            const s = A(e,0),a = A(e,1),i = A(e,2),l = A(e,3);
                                            "function "!= typeof i ? (t = s,n = a,o = i,r = l) : (t = s,n = a,r = i),w(c,M( {
                                              m : t,a : n,r : r?y(r) : null,n : o
                                            }
                                          ))}
                                          ,onMessage : M( {
                                            setListener : (e,t) = > {
                                              a = e,t || (g(v,e = > {
                                              x(e)}
                                            ),v = null)}
                                            }),cleanup : () = > {
                                              i && u(r,e,[i,x,!0]),i = null
                                            }
                                          });
                                          return L
                                        }
                                        )(C,G.safeDocument),N.init(n),N.onMessage.setListener(( {
                                          method : t,args : n
                                        }
                                        ) = > {
                                          if(G)if("commid "== t)N.switchId(n.id);
                                          else if("load "== t)G.Context.pageLoaded = !0;
                                          else if("DOMContentLoaded "== t)G.Context.domContentLoaded = !0;
                                          else if("cleanup "== t)N.cleanup(),G = null;
                                          else {
                                            if("next "!= t)return!1;
                                            if(n.id)G.exec_script(n.id,G),G.exec_eval = !1;
                                            else {
                                              if(void 0 === G.exec_eval)try {
                                              G.exec_eval = p(C.eval,e)("true")}
                                              catch(e) {
                                                G.exec_eval = !1
                                              }
                                            G.exec_eval ? G.exec_fn(n.src,G) : G.exec_csp(n.src,G)}
                                          }
                                        }
                                        ,!0),G.Context.Message = N
                                      }
                                      catch(e) {
                                      return I(e)}
                                      },next : (e,t,n,o,r,s,a,i,c,l,d,u,p,m) = >["const backup = this;
                                      ","(function TM_back() {
                                        ","const {
                                          cSO,pO
                                        }
                                        =backup;
                                        ","const Context = backup.Context = cSO(backup.Context);
                                        ","const copy = function(src) {
                                          ",'"use strict";
                                          ',"const props = Context.O_gOPN(src);
                                          ","for (let kk,ii = 0;
                                          (kk = props[ii]) !== undefined;
                                          ii++) {
                                            ","Context[kk]=src[kk];
                                          ","}
                                          ;
                                        ","}
                                        ;
                                        ","copy(backup);
                                        ","with (Context) {
                                          ","(() = > {
                                            ",'"use strict";
                                            ',"copy( {
                                              ","Context,",`V : !!$ {
                                                a
                                              }
                                              ,`,`ENV : !!$ {
                                                i
                                              }
                                              ,`,`TS : !!$ {
                                                l
                                              }
                                              ,`,`D : !!$ {
                                                d
                                              }
                                              ,`,`use : pO($ {
                                                o
                                              }
                                              ),`,`scripts : $ {
                                                t
                                              }
                                              ,`,"_content : false,",`flags : pO($ {
                                                n
                                              }
                                              ),`,`ScriptPermissionToGrant : pO($ {
                                                r
                                              }
                                              ),`,"write_listeners : [ d = > {
                                                ","Context.cSD(d);
                                                ","Message.init();
                                              ","}
                                            ]","}
                                            );
                                            ",'safeWindow.addEventListener("unload",evt = > Message.cleanup(),cSO( {
                                              capture : false,once : true
                                            }
                                            ));
                                            ',(() = > {
                                              let t = "";
                                              a && (t += "let V = true;
                                              "),c && (t += "let EV = true;
                                              "),i && (t += "let ENV = true;
                                              "),t += `let logLevel = $ {
                                                s
                                              }
                                              ;
                                              `;
                                              const n = `let contextId = "$ {
                                                e
                                              }
                                              ";
                                              `;
                                              let o = "";
                                              return u || "complete "== document.readyState ? (o += "Context.pageLoaded|=true;
                                              ",o += "Context.domContentLoaded|=true;
                                              ") : (p || "interactive "== document.readyState) && (o += "Context.domContentLoaded|=true;
                                              "),`$ {
                                                t+n+"const Event = function() {
                                                }
                                                ;
                                                const Window = function() {
                                                }
                                                ;
                                                Window.prototype = cSO( {
                                                }
                                                );
                                                "+o
                                              }
                                              ($ {
                                                m
                                              }
                                              )(Context,contextId);
                                            \n`}
                                          )(),"}
                                          )();
                                        ","}
                                        ;
                                      ","}
                                      )();
                                      "].join(""),environment : function(e,t) {
                                        const n = e.V,o = e.EV,r = e.D, {
                                          pO : s,sOP : a,gOP : i,cP : c,tT : l,safeWindow : d,sandboxWindow : u,safeDocument : p,flags : m,ScriptPermissionToGrant : g,i_N : f,F_a : _,F_c : v,F_b : h,F_tS : b,A_fE : y,A_sl : w,A_sp : M,A_so : E,A_po : x,A_sh : S,A_j : L,A_f : O,A_iO : C,A_c : T,O_a : R,O_k : U,O_dP : A,O_dPy : P,O_gOPN : I,O_gOPDs : D,J_p : k,J_s : N,c_l : G,c_i : j,c_w : F,c_e : $,c_d : V,M_f : q,M_r : B,M_m : X,P_r : H,P_t : J,P_c : W,S_fCC : K,S_sl : Y,S_su : z,S_sp_nr : Q,S_tr : Z,S_rA_nr : ee,S_se_nr : te,S_cCA : ne,S_tLC : oe,S_tUC : re,R_rABS : se,R_rAT : ae,D_pFS : ie,R_enq : ce,R_cl : le,X_o : de,X_pSD : ue,X_pSH : pe,X_pSL : me,X_pSO : ge,X_pSU : fe,X_s : _e,M_pA : ve,M_pAT : he,D_n : be
                                        }
                                        =e,ye = e.Message,we = e.cSO, {
                                          createID : Me,arrayGet : Ee
                                        }
                                        =e.Helper,xe = (e,t,n,o) = > {
                                          const r = te(e,t);
                                          if(- 1== r)return;
                                          const s = z(e,r+t.length);
                                          if(!n)return s;
                                          const a = te(s,n);
                                        return - 1== a ? o && o.optionalEnd ? s:void 0 : z(e,r+t.length,a)}
                                        ,Se = window,Le = Se.document,Oe = "DOMContentLoaded",Ce = "load",Te = "DOMNodeInserted";
                                        e.domContentLoaded = e.domContentLoaded || !1,e.pageLoaded = e.pageLoaded || !1,e.domNodeInserted = e.domNodeInserted || !1,e.props = we( {
                                        }
                                        );
                                        const Re = (() = > {
                                          let e = 0,t = 0;
                                          const n = we( {
                                          }
                                          ),o = we( {
                                          }
                                          ),r = function(e,t,o,r) {
                                            const s = this,a = () = > {
                                            n[o] && (_(e,s,r),delete n[o])}
                                            ;
                                            if("function "== typeof e)if(n[o]=e,0 === t) {
                                              const e = H();
                                            J(e,() = >a())}
                                            else ye.send("setTimeout",we( {
                                              t : t || 1
                                            }
                                          ),() = >a())}
                                          ,s = function(e,t,n,r) {
                                            const s = this;
                                            if("function "== typeof e) {
                                              const i = o[n]=Pe.connect("setInterval");
                                              i.onMessage.addListener(() = > {
                                              o[n] && _(e,s,r)}
                                              ),i.onDisconnect.addListener(() = > {
                                              a(n)}
                                              ),i.postMessage(we( {
                                                method : "setInterval",t : t || 1
                                              }
                                            ))}
                                            },a = e=> {
                                              const t = o[e];
                                            t && (t.disconnect(),delete o[e])}
                                            ,i = we( {
                                              setTimeout : (e,t,...n) = > {
                                                const o = Me();
                                                return r(e,t,o,n),o
                                              }
                                              ,clearTimeout : e=>(e = >delete n[e])(e),setInterval : (e,t,...n) = > {
                                                const o = Me();
                                                return s(e,t,o,n),o
                                              }
                                            ,clearInterval : e=>a(e)}
                                            ),c = we( {
                                              setTimeout : (e,n,...o) = > {
                                                const s = ++t;
                                                return n = X(n,1),r(e,n,s,o),s
                                              }
                                              ,setInterval : (t,n,...o) = > {
                                                const r = ++e;
                                                return n = X(n,1),s(t,n,r,o),r
                                              }
                                            });
                                            return y(U(i),e = >d[e]=i[e]),c
                                          }
                                          )(),Ue = (() = > {
                                            let t = [];
                                            const n = e=> {
                                            e()}
                                            ,o = e=> {
                                              if(Le.body)e && (e(),e = null);
                                              else {
                                                const t = [Ce,Te,Oe],n = () = > {
                                                  y(t,e = > {
                                                  p.removeEventListener(e,n,!1)}
                                                ),o(e)}
                                                ;
                                                y(t,e = > {
                                                p.addEventListener(e,n,!1)}
                                              )}
                                            };
                                            var s = we( {
                                              runListeners : () = > {
                                                let e;
                                                for(;
                                                e = S(t);
                                              )e()}
                                              ,run : a=> {
                                                const {
                                                  script :  {
                                                    name : i,options : c
                                                  }
                                                  }=a,l = () = > {
                                                  ke.create(a)}
                                                  ;
                                                  var u;
                                                  "document - start "== c.run_at ? (r && V(`env : run "$ {
                                                    i
                                                  }
                                                  " ASAP - > document - start`),n(l)) : "document - body "== c.run_at ? (r && V(`env : schedule "$ {
                                                    i
                                                  }
                                                  " for document - body`),o(l)) : "context - menu "== c.run_at ? (r && V(`env : run "$ {
                                                    i
                                                  }
                                                  " ASAP - > context - menu`),n(l)) : "document - end "== c.run_at ? (r && V(`env : schedule "$ {
                                                    i
                                                  }
                                                  " for document - end`),t = T(t,l),e.domContentLoaded && s.runListeners()) : (r && V(`env : schedule "$ {
                                                    i
                                                  }
                                                  " for document - idle`),u = l,t = T(t,() = > {
                                                  d.setTimeout(u,1)}
                                                ),e.domContentLoaded && s.runListeners())}
                                              });
                                              return s
                                            }
                                            )();
                                            (n || r) && V(`env : initialized (content,id : $ {
                                            z(t,0,10)}
                                            ...,$ {
                                              d.location.origin
                                            }
                                            $ {
                                              d.location.pathname
                                            }
                                            ) `);
                                            const Ae = we( {
                                              UTF8 : we( {
                                              encode : e=>d.unescape(d.encodeURIComponent(e)),decode : e=>d.decodeURIComponent(d.escape(e))}
                                              ),Base64 : we( {
                                                encode : e=> {
                                                  let t = "";
                                                  for(let n = 0;
                                                  n<e.length;
                                                  n++)t += K(255&ne(e,n));
                                                return d.btoa(t)}
                                              ,decode : e=>d.atob(e)}
                                              ),str2abSync : e=> {
                                                const t = new d.Uint8Array(e.length);
                                                for(let n = 0;
                                                n<e.length;
                                                n++)t[n]=ne(e,n);
                                                return t.buffer
                                              }
                                              ,ab2strSync : e=> {
                                                let t = "";
                                                const n = new d.Uint8Array(e);
                                                for(let e = 0;
                                                e<n.length;
                                                e += 32687)t += _(K,null,n.subarray(e,e+32687));
                                                return t
                                              }
                                              ,blob2str : (e,t) = >new d.Promise(n = > {
                                                const o = new u.FileReader;
                                                o.onload = () = > {
                                                n(o.result)}
                                                ,o.onerror = e=> {
                                                F("unable to decode data "+e),n("")}
                                              ,t ? ae(o,e,t) : se(o,e)}
                                            )}
                                            ),Pe = (() = > {
                                              const e = we( {
                                              }
                                              );
                                              let t;
                                              const n = t=> {
                                                let n = [],o = [];
                                                const r = () = > {
                                                n = null,o = null,s = null,delete e[t]}
                                                ;
                                                var s = we( {
                                                  postMessage : e=> {
                                                    ye.send("port.message",we( {
                                                      response_id : t,value : e
                                                    }
                                                  ))}
                                                  ,onMessage : we( {
                                                    addListener : e=> {
                                                    n = T(n,e)}
                                                    }),onDisconnect : we( {
                                                      addListener : e=> {
                                                      o = T(o,e)}
                                                      }),disconnect : () = > {
                                                        ye.send("port.message",we( {
                                                          response_id : t,disconnect : !0
                                                        }
                                                      )),r()}
                                                    });
                                                    return e[t]=we( {
                                                      message : e=> {
                                                        n && y(n,t = > {
                                                        t(e)}
                                                      )}
                                                      ,disconnect : e=> {
                                                        o && y(o,t = > {
                                                        t(e)}
                                                      ),r()}
                                                    }),s
                                                  }
                                                  ;
                                                  return we( {
                                                    message : o=> {
                                                      let s;
                                                      if(o.connect)t && t(o.destination,n(o.response_id));
                                                      else {
                                                        if(!(s = e[o.response_id]))return void(r && F("ports : unknown id",o.response_id,o));
                                                      o.disconnect ? s.disconnect() : s.message(o.value)}
                                                      },connect : e=> {
                                                        const t = Me();
                                                        return ye.send("port.message",we( {
                                                          response_id : t,connect : !0,destination : e
                                                        }
                                                      )),n(t)}
                                                      ,onConnect : we( {
                                                        addListener : e=> {
                                                          t = e
                                                        }
                                                      })}
                                                    )}
                                                    )(),Ie = (() = > {
                                                      const e = we( {
                                                        objs : we( {
                                                        }
                                                        ),push : (t,n) = > {
                                                          0 !== n && 1 !== n && (n = 0);
                                                          const o = q(19831206*B()+1);
                                                          return e.objs[o]=we( {
                                                            fn : t,prio : n
                                                          }
                                                          ),o
                                                        }
                                                        ,remove : t=>delete e.objs[t],get : t=> {
                                                          let n = [];
                                                          for(let o = 0;
                                                          o<=1;
                                                          o++)y(U(e.objs),r = > {
                                                          e.objs[r].prio !== o || void 0 !== t && r!=t || (n = T(n,e.objs[r].fn))}
                                                          );
                                                        return void 0 === t ? n:Ee(n,0)}
                                                        ,finalize : t=> {
                                                          if(void 0 !== t) {
                                                            let n;
                                                            return e.objs[t] && (n = e.objs[t].fn(),delete e.objs[t]),n
                                                            } {
                                                              const t = e.get();
                                                              for(let e = 0;
                                                              e<t.length;
                                                            e++)t[e]()}
                                                          }
                                                        }
                                                        );
                                                        return e
                                                      }
                                                      )(),De = (() = > {
                                                        const e = (e,n,o) = > {
                                                          ye.send("setClipboard",we( {
                                                            content : e,info : n,id : t
                                                          }
                                                        ),o ? () = >o() : null)}
                                                        ,o = (e,t) = >E(t,t = >- 1!= C(e,t)),i = we( {
                                                        }
                                                        );
                                                        return we( {
                                                          syntaxCheck : (e,t) = > {
                                                            ye.send("syntaxCheck",we( {
                                                              code : e
                                                            }
                                                          ),t)}
                                                          ,of : c=> {
                                                            const f = c.script,v = (() = > {
                                                              let e = [];
                                                              const s = c.storage;
                                                              let a = 0;
                                                              const i = o(f.grant,g.readValues),l = o(f.grant,g.writeValues),u = (e,t) = > {
                                                                if("string "!= typeof e)return t;
                                                                 {
                                                                  const n = z(e,0,1);
                                                                  switch(e = z(e,1),n) {
                                                                    case"b" : return"true" === e;
                                                                    case"n" : return d.Number(e);
                                                                    case"x" : return Ae.UTF8.decode(Ae.Base64.decode(e));
                                                                    case"o" : try {
                                                                    return k(e)}
                                                                    catch(e) {
                                                                    G("values : parseValueFromStorage : "+e)}
                                                                    return t;
                                                                    case"u" : return;
                                                                    default : return e
                                                                  }
                                                                }
                                                              }
                                                              ,p = (t,n,o,s) = > {
                                                                n!= o && y(e,e = > {
                                                                  if(e && e.ke y== t&& e.cb)try {
                                                                  e.cb(t,u(n),u(o),s)}
                                                                  catch(e) {
                                                                    r && F(`values : change listener of "$ {
                                                                      t
                                                                    }
                                                                    " failed with : $ {
                                                                      e.message
                                                                    }
                                                                  `)}
                                                                })}
                                                                ,m = e=> {
                                                                  _ && _.postMessage(we( {
                                                                    method : "saveStorageKey",uuid : f.uuid,key : e,value : s.data[e],id : t,ts : s.ts
                                                                  }
                                                                ))}
                                                                ;
                                                                if(i) {
                                                                  var _ = Pe.connect("values");
                                                                  _.onMessage.addListener(e = > {
                                                                    if(!e.storage)return;
                                                                    const t = e.storage.data;
                                                                    e.removed && (t[e.removed]=void 0),y(U(t),e = > {
                                                                      const o = s.data[e],r = t[e];
                                                                      void 0 === r ? delete s.data[e]:s.data[e]=r,n && G(`values : message - config key $ {
                                                                        e
                                                                      }
                                                                      :$ {
                                                                        o
                                                                      }
                                                                      -> $ {
                                                                        r
                                                                      }
                                                                    `),p(e,o,r,!0)}
                                                                  )}
                                                                  ),_.onDisconnect.addListener(() = > {
                                                                    r && G("values : port disconnected"),_ = null
                                                                  }
                                                                  ),_.postMessage(we( {
                                                                    method : "addStorageListener",uuid : f.uuid,id : t
                                                                  }
                                                                ))}
                                                                return we( {
                                                                  ...we(i ?  {
                                                                    get : (e,t) = >u(s.data[e],t),list : () = >U(s.data),registerChangeListener : (t,n) = > {
                                                                      const o = ++a,r = we( {
                                                                        id : o,key : t,cb : n
                                                                      }
                                                                      );
                                                                      return e = T(e,r),o
                                                                    }
                                                                    ,unregisterChangeListener : t=> {
                                                                    e = O(e,e = >e.id !== t)}
                                                                    }: {
                                                                      get : void 0,list : void 0,registerChangeListener : void 0,unregisterChangeListener : void 0
                                                                    }
                                                                    ),...we(we(l ?  {
                                                                      set : (e,t) = > {
                                                                        const n = s.data[e];
                                                                        s.ts = be(),s.data[e]=(e = > {
                                                                          let t = z(typeof e,0,1);
                                                                          switch(t) {
                                                                            case"o" : try {
                                                                            e = t+N(e)}
                                                                            catch(e) {
                                                                            return void G(e)}
                                                                            break;
                                                                            case"s" : -1 === te(e,K(8232)) && -1 === te(e,K(8233)) || (t = "x",e = Ae.Base64.encode(Ae.UTF8.encode(e))),e = t+e;
                                                                            break;
                                                                            default : e=t+e
                                                                          }
                                                                          return e
                                                                        }
                                                                      )(t),m(e),p(e,n,s.data[e],!1)}
                                                                      ,remove : e=> {
                                                                        const t = s.data[e];
                                                                      s.ts = be(),delete s.data[e],m(e),p(e,t,s.data[e],!1)}
                                                                      }: {
                                                                        set : void 0,remove : void 0
                                                                      }
                                                                    ))}
                                                                  )}
                                                                  )(),h = o(f.grant,g["window.onurlchange"]) ? (() = > {
                                                                    let e,n = [];
                                                                    return we( {
                                                                      register : o=> {
                                                                        n = T(n,o),e || (e = Pe.connect("onurlchange"),e.onMessage.addListener(( {
                                                                          url : e
                                                                        }
                                                                        ) = > {
                                                                          e && y(n,t = >t(we( {
                                                                            url : e
                                                                          }
                                                                        )))}
                                                                        ),e.postMessage(we( {
                                                                          method : "observeUrlChanges",uuid : f.uuid,id : t
                                                                        }
                                                                      )))}
                                                                      ,unregister : t=> {
                                                                        let o;
                                                                      t && (o = C(n,t))>-1 && (n = M(n,o,1).result),e && 0 === n.length && (e.disconnect(),e = null)}
                                                                    })}
                                                                    )() : void 0,I = o(f.grant,g.getResource) ? we( {
                                                                      getText : e=> {
                                                                        for(let t = 0;
                                                                        t<f.resources.length;
                                                                        t++) {
                                                                          const n = f.resources[t];
                                                                          if(n.nam e== e) {
                                                                            if(n.error)F("@resource : "+n.error);
                                                                            else try {
                                                                            if("string "== typeof n.content)return Ae.UTF8.decode(n.content)}
                                                                            catch(e) {
                                                                            }
                                                                          return""}
                                                                        }return null
                                                                      }
                                                                      ,getUrl : e=> {
                                                                        for(let t = 0;
                                                                        t<f.resources.length;
                                                                        t++) {
                                                                          const n = f.resources[t];
                                                                          if(n.nam e== e) {
                                                                            if(n.error)F("@resource : "+n.error);
                                                                            else if("string "== typeof n.content) {
                                                                              try {
                                                                                return`data : $ {
                                                                                n.meta || "application / octet - stream"}
                                                                                ;
                                                                                base64,$ {
                                                                                Ae.Base64.encode(n.content)}
                                                                              `}
                                                                              catch(e) {
                                                                              }
                                                                              return n.url
                                                                            }
                                                                          return""}
                                                                        }return null
                                                                      }
                                                                      }) : we( {
                                                                        getUrl : void 0,getText : void 0
                                                                      }
                                                                      ),D = o(f.grant,g.tabs) ? we( {
                                                                        set : (e,t) = > {
                                                                          ye.send("tabs",we( {
                                                                            action : "set",uuid : f.uuid,tab : e
                                                                          }
                                                                        ),t ? () = >t() : null)}
                                                                        ,get : e=> {
                                                                          ye.send("tabs",we( {
                                                                            action : "get",uuid : f.uuid
                                                                          }
                                                                          ),e ? t=> {
                                                                            e(t || we( {
                                                                            }
                                                                          ))}
                                                                        :null)}
                                                                        ,getAll : e=> {
                                                                          ye.send("tabs",we( {
                                                                            action : "list",uuid : f.uuid
                                                                          }
                                                                          ),e ? t=> {
                                                                            e(t || we( {
                                                                            }
                                                                          ))}
                                                                        :null)}
                                                                        }) : we( {
                                                                          set : void 0,get : void 0,getAll : void 0
                                                                        }
                                                                        ),j = o(f.grant,g.xmlHttpRequest) ? (() = > {
                                                                          const e = e=> {
                                                                            const o = s(e);
                                                                            let r = !1,a = () = > {
                                                                              r = !0
                                                                            }
                                                                            ;
                                                                            const i = (e,t) = > {
                                                                              t = t || we( {
                                                                              }
                                                                              ),e && d.setTimeout(() = > {
                                                                              R(t,n),_(e,t,[t])}
                                                                            ,1)}
                                                                            ;
                                                                            "object "== typeof o.url && o.url.href && (o.url = o.url.href);
                                                                            const c = (e,t) = > {
                                                                              let n,o,r = l(e);
                                                                              if("Blob" === r || "File" === r) {
                                                                                const n = e;
                                                                                J(Ae.blob2str(n),e = > {
                                                                                  t(we( {
                                                                                    type : r,value : e,meta : n.type,name : n.name,lastModified : n.lastModified
                                                                                  }
                                                                                ))}
                                                                              )}
                                                                              else if("FormData" === r) {
                                                                                const r = e,s = r.keys();
                                                                                let a;
                                                                                const i = we( {
                                                                                }
                                                                                );
                                                                                for(n = [];
                                                                                !(a = s.next()).done;
                                                                                )n = T(n,a.value);
                                                                                o = () = > {
                                                                                  if(n.length) {
                                                                                    const e = x(n);
                                                                                    let t = r.getAll(e);
                                                                                    "[]" !== z(e,-2) && (t = Ee(t,0)),c(t,t = > {
                                                                                    i[e]=t,o()}
                                                                                  )}
                                                                                  else t(we( {
                                                                                    type : "FormData",value : i
                                                                                  }
                                                                                ))}
                                                                              ,o()}
                                                                              else if("Array" === r || "Object" === r) {
                                                                                const s = e;
                                                                                let a,i,l = 0,u = 0;
                                                                                "Object" === r ? (n = U(s),i = e=>e<n.length ? n[e]:null,a = we( {
                                                                                }
                                                                                )) : (i = e=>e<s.length ? e:null,a = []),o = () = > {
                                                                                  const e = i(l);
                                                                                  null === e ? t(we( {
                                                                                    type : r,value : a
                                                                                  }
                                                                                  )) : c(s[e],t = > {
                                                                                  a[e]=t,l++,u++<1024 ? o() : (u = 0,d.setTimeout(o,1))}
                                                                                )}
                                                                              ,o()}
                                                                              else t(we( {
                                                                                value : e
                                                                              }
                                                                            ))}
                                                                            ,p = (e,t,n,o,r) = > {
                                                                              let s;
                                                                              if(n)"stream "== o&& (s = n);
                                                                              else if("arraybuffer "== o)s = t || Ae.str2abSync(e);
                                                                              else if("blob "== o)s = new d.Blob([t || Ae.str2abSync(e)],we( {
                                                                                type : r
                                                                              }
                                                                              ));
                                                                              else if("json "== o)s = k(e);
                                                                              else {
                                                                                if("document "== o) {
                                                                                  const t = new u.DOMParser,n = Ee(Q(r || "text / xml",";
                                                                                  "),0);
                                                                                return ie(t,e,n)}
                                                                              s = e || (t ? Ae.ab2strSync(t) : "")}
                                                                              return s
                                                                            }
                                                                            ;
                                                                            return(e = > {
                                                                              if(o.url) {
                                                                                const t = z(o.url,0,5);
                                                                              if(- 1!= C(["data : ","blob : "],t))return e()}
                                                                              if(!o.data)return e();
                                                                              c(o.data,t = > {
                                                                              o.binary && (t.type = "Blob"),o.data = t,o.data_type = "typified",e()}
                                                                            )}
                                                                            )(() = > {
                                                                              if(r)return r = !1,void i(o.onabort);
                                                                              let e,n,s,c = Pe.connect("xhr"),l = [];
                                                                              const {
                                                                                method : m,url : g,headers : _,cookie : v,binary : h,nocache : b,revalidate : M,timeout : x,context : R,responseType : A,overrideMimeType : I,anonymous : D,fetch : k,user : N,password : G,data : j,data_type : V
                                                                              }
                                                                              =o,q = we( {
                                                                                method : m,url : g,headers : _,cookie : v,binary : h,nocache : b,revalidate : M,timeout : x,responseType : A,overrideMimeType : I,anonymous : D,fetch : k,user : N,password : G,data : j,data_type : V
                                                                              }
                                                                              );
                                                                              let B,X,H,J;
                                                                              q.headers && y(U(q.headers),e = > {
                                                                              "cookie" === oe(e) && (q.cookie = d.String(q.headers[e]),delete q.headers[e])}
                                                                              ),c.postMessage(we( {
                                                                                method : "xhr",details : q,callbacks : we( {
                                                                                  onloadstart : !!o.onloadstart,onload : !!o.onload,ondone : !!o.onloadend,onreadystatechange : !!o.onreadystatechange,onerror : !0,onabort : !!o.onabort,ontimeout : !!o.ontimeout,onprogress : !!o.onprogress,onpartial : !0
                                                                                }
                                                                                ),id : t,url : d.location.href,uuid : f.uuid
                                                                              }
                                                                              ));
                                                                              const W = A?oe(A) : "";
                                                                              let K;
                                                                              const Y = async t = > {
                                                                                if(t && (s || void 0 !== e || void 0 !== n)) {
                                                                                  if(I ? J=I : t && (J = (e = > {
                                                                                    const t = we( {
                                                                                    }
                                                                                    );
                                                                                    return e && y(Q(e,"\n"),e = > {
                                                                                      const n = Q(e," : ");
                                                                                      if(n.length<2)return;
                                                                                      const o = Ee(n,0);
                                                                                      if(!o)return;
                                                                                      const r = L(w(n,1)," : ");
                                                                                    t[oe(Z(o))]=Z(r || "")}
                                                                                    ),t
                                                                                  }
                                                                                  )(t.responseHeaders)["content - type"]),B = e,s)H = s.stream;
                                                                                  else if(n) {
                                                                                    const e = n;
                                                                                    if(X = e.buffer,- 1== C(["blob","arraybuffer"],W) && !B) {
                                                                                      let t;
                                                                                      E([J,e.type],e = >t = xe(oe(e || ""),"charset = ",";
                                                                                      ",we( {
                                                                                        optionalEnd : !0
                                                                                      }
                                                                                      )));
                                                                                      const n = new d.Blob([X]);
                                                                                      K = Ae.blob2str(n,t),B = await K
                                                                                    }
                                                                                    K = void 0
                                                                                  }
                                                                                  else K && await K;
                                                                                  e = n=void 0
                                                                                }
                                                                                if(B || H || X) {
                                                                                  t.responseType = A,y(["response_data"],e = > {
                                                                                  delete t[e]}
                                                                                  );
                                                                                  const e = we( {
                                                                                  response : () = >p(B,X,H,W,J || "binary / octet - stream"),responseText : () = >p(B,X,H,"text",J),responseXML : () = >p(B,X,H,"document","text / xml")}
                                                                                  );
                                                                                  y(U(e),n = > {
                                                                                    P(t,n,we( {
                                                                                      get() {
                                                                                        try {
                                                                                        return e[n]()}
                                                                                        catch(e) {
                                                                                        F(m+" : ",e)}
                                                                                      }
                                                                                    }
                                                                                  ))}
                                                                                )}
                                                                              };
                                                                              let z = [];
                                                                              const ee = async e = > {
                                                                                e && (z = T(z,e));
                                                                                 {
                                                                                  const e = S(z);
                                                                                e && e()}
                                                                              };
                                                                              "stream" === W && ee(async() = > {
                                                                                s = await new d.Promise(e = > {
                                                                                  const t = new u.ReadableStream(we( {
                                                                                    start : n=> {
                                                                                      d.setTimeout(() = >e(we( {
                                                                                        stream : t,ctrl : n
                                                                                      }
                                                                                    )),0)}
                                                                                  }))}
                                                                                )}
                                                                                ),c.onMessage.addListener(t = >ee(() = >(async t = > {
                                                                                  if(t.data && R && (t.data.context = R),t.onload)await Y(t.data),i(o.onreadystatechange,t.data),i(o.onload,t.data);
                                                                                  else if(t.onreadystatechange)await Y(t.data), 4!= t.data.readyState && i(o.onreadystatechange,t.data);
                                                                                  else if(t.onpartial) {
                                                                                    const o = t.data;
                                                                                    if(s) {
                                                                                      const e = ce || ((e,t) = >e.enqueue(t));
                                                                                      if(void 0 !== o.partial)e(s.ctrl,o.partial);
                                                                                      else if(void 0 !== o.nada) {
                                                                                        const t = new d.Uint8Array(o.nada.buffer);
                                                                                      e(s.ctrl,t)}
                                                                                    else $(m+" : ","data message without data ? !")}
                                                                                    else {
                                                                                      let t;
                                                                                    o.partial && (l = T(l,o.partial)),o.nada && (t = o.nada),void 0 !== o.index && o.index !== o.length - 1 || (l.length && (e = L(l,""),l = []),n = t)}
                                                                                  }else if(t.onerror)t.exception && $(t.exception),i(o.onerror,t.data);
                                                                                  else if(t.onabort)i(o.onabort,t.data);
                                                                                  else if(t.ondone)s && (le || (e = >e.close()))(s.ctrl),await Y(t.data),i(o.onloadend,t.data);
                                                                                  else if(t.onloadstart)s && await Y(t.data),i(o.onloadstart,t.data);
                                                                                  else {
                                                                                    const e = Ee(O(["onprogress","ontimeout"],e = >!!t[e]),0) || "onerror";
                                                                                  i(o[e],t.data)}
                                                                                  })(t))),c.onDisconnect.addListener(() = >c = null),a = () = > {
                                                                                    c && c.postMessage(we( {
                                                                                      cancel : !0
                                                                                    }
                                                                                  ))}
                                                                                  }),we( {
                                                                                    abort : () = > {
                                                                                    a()}
                                                                                  })}
                                                                                  ,n = (() = > {
                                                                                    const e = we( {
                                                                                      DONE : ue,HEADERS_RECEIVED : pe,LOADING : me,OPENED : ge,UNSENT : fe
                                                                                    }
                                                                                    );
                                                                                    return y(["text","arraybuffer","blob","document","json","stream"],t = > {
                                                                                      e["RESPONSE_TYPE_"+re(t)]=t
                                                                                    }
                                                                                    ),e
                                                                                  }
                                                                                  )();
                                                                                  return y(U(n),t = >a(e,t,n[t])),e
                                                                                }
                                                                                )() : void 0,q = o(f.grant,g.notification) ? e=> {
                                                                                  const {
                                                                                    text : n,title : o,image : r,highlight : a,silent : i,timeout : c,onclick : l,ondone : d
                                                                                  }
                                                                                  =s(e),u = we( {
                                                                                    id : t,uuid : f.uuid,text : n,title : o,image : r,highlight : a,silent : i,timeout : c
                                                                                  }
                                                                                  );
                                                                                  n || a ? ye.send("notification",u,e = > {
                                                                                  l && e.clicked && l(),d && d(!0 === e.clicked)}
                                                                                ) : F("GM_notification : neither a message text nor highlight options were given!")}
                                                                                :void 0;
                                                                                let B,X;
                                                                                const H = o(f.grant,g.webRequest) ? (e,t) = > {
                                                                                  const n = () = > {
                                                                                    X== o && (X = null),o = null
                                                                                  }
                                                                                  ;
                                                                                  X && X.disconnect();
                                                                                  var o = X=Pe.connect("webRequest");
                                                                                  return t && o.onMessage.addListener(e = > {
                                                                                  t(e.type,e.message || "ok",e.details)}
                                                                                  ),o.onDisconnect.addListener(n),o.postMessage(we( {
                                                                                    rules : e,uuid : f.uuid
                                                                                  }
                                                                                  )),we( {
                                                                                    abort : () = > {
                                                                                    o && o.disconnect(),n()}
                                                                                  })}
                                                                                  :void 0,W = o(f.grant,g.menuCommand) ? (() = > {
                                                                                    let e = 0;
                                                                                    const t = we( {
                                                                                    }
                                                                                    ),o = we( {
                                                                                      register : (r,s,a) = > {
                                                                                        const i = "registerMenuCommand",c = ++e,l = Pe.connect(i);
                                                                                        return l.onMessage.addListener(e = > {
                                                                                          if("run" === e.method) {
                                                                                            const t = e.event,n = t?t.keyCode ? new d.KeyboardEvent("keypress",t) : new d.MouseEvent("click",e.event) : void 0;
                                                                                          d.setTimeout(() = >s(n),1)}
                                                                                          }),l.onDisconnect.addListener(() = > {
                                                                                          o.unregister(c)}
                                                                                          ),l.postMessage(we( {
                                                                                            method : "register",name : r,uuid : f.uuid,accessKey : a
                                                                                          }
                                                                                          )),n && G(`env : $ {
                                                                                            i
                                                                                          }
                                                                                          $ {
                                                                                          b(s)}
                                                                                          `),t[c]=l.disconnect,c
                                                                                        }
                                                                                        ,unregister : e=> {
                                                                                          let o;
                                                                                        n && G("env : unregisterMenuCommand "+e),(o = t[e]) && (o(),delete t[e])}
                                                                                      });
                                                                                      return o
                                                                                    }
                                                                                    )() : we( {
                                                                                      register : void 0,unregister : void 0
                                                                                    }
                                                                                    ),Y = o(f.grant,g.cookie) ? (() = > {
                                                                                      const e = (e,t) = >we( {
                                                                                        action : e,uuid : f.uuid,url : d.location.href,details : t
                                                                                      }
                                                                                      );
                                                                                      return we( {
                                                                                        set : (t,n) = > {
                                                                                          ye.send("cookie",e("set",t),n ? e=> {
                                                                                          n(e.error)}
                                                                                        :null)}
                                                                                        ,delete : (t,n) = > {
                                                                                          ye.send("cookie",e("delete",t),n ? e=> {
                                                                                          n(e.error)}
                                                                                        :null)}
                                                                                        ,list : (t,n) = > {
                                                                                          ye.send("cookie",e("list",t),n ? e=> {
                                                                                          n(e.cookies,e.error)}
                                                                                        :null)}
                                                                                      })}
                                                                                      )() : void 0,ee = ( {
                                                                                        root : e,tag : t,properties : n,cb : o
                                                                                      }
                                                                                      ) = > {
                                                                                        const r = Me(),s = we( {
                                                                                          tag : t,properties : n,id : r,uuid : f.uuid
                                                                                        }
                                                                                        );
                                                                                      return ye.send("addElement",s,e,o ? () = >o() : null),p.getElementById(r)}
                                                                                      ,ne =  {
                                                                                        getInfo : () = > {
                                                                                          if(!B) {
                                                                                            const {
                                                                                              script : e,header : t,code : n
                                                                                            }
                                                                                            =c, {
                                                                                              updateURL : o,fileURL : r,grant : s,options :  {
                                                                                                run_at : a,override :  {
                                                                                                  orig_excludes : i,orig_includes : l,orig_matches : d
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                            =e, {
                                                                                              version : u,inIncognitoContext : p,isFirstPartyIsolation : g,downloadMode : f
                                                                                            }
                                                                                            =m,_ = we( {
                                                                                              id : 1,enabled : 1,hash : 1,fileURL : 1
                                                                                            }
                                                                                            ),v = o || r,h = we( {
                                                                                              unwrap : !1,"run - at" : a,excludes : i,includes : l,matches : d,grant : s
                                                                                            }
                                                                                            ),b = we( {
                                                                                              scriptMetaStr : t,scriptSource : n,scriptWillUpdate : !!v,scriptUpdateURL : v,version : u,scriptHandler : "Tampermonkey",isIncognito : p,isFirstPartyIsolation : g,downloadMode : f,script : h
                                                                                            }
                                                                                            );
                                                                                            y(U(e),t = > {
                                                                                            _[t] || (h[t]=e[t])}
                                                                                            ),B = b
                                                                                          }
                                                                                        return k(N(B))}
                                                                                        ,registerMenuCommand : W.register,unregisterMenuCommand : W.unregister,webRequest : H,openInTab : (e,t) = > {
                                                                                          let n,o = null,s = !1,a = null;
                                                                                          const i = (() = > {
                                                                                            let e = [];
                                                                                            return we( {
                                                                                              run : t=> {
                                                                                                if(t && (e = T(e,t)),o)for(;
                                                                                                e.length;
                                                                                              )x(e)()}
                                                                                            })}
                                                                                            )();
                                                                                            let c = Pe.connect("openInTab");
                                                                                            const l = () = > {
                                                                                              c && c.postMessage(we( {
                                                                                                close : !0
                                                                                              }
                                                                                            ))}
                                                                                            ;
                                                                                            c.onMessage.addListener(e = > {
                                                                                            e.tabId ? s?l() : (o = e.tabId,i.run()) : e.name ? n=e.name : e.closed && (s = !0,a && (a(),a = void 0))}
                                                                                            ),c.onDisconnect.addListener(() = > {
                                                                                              c = null
                                                                                            }
                                                                                            ),c.postMessage(we( {
                                                                                              method : "openTab",url : e,options : t,uuid : f.uuid
                                                                                            }
                                                                                            ));
                                                                                            const d = we( {
                                                                                            }
                                                                                            );
                                                                                            return A(d,we( {
                                                                                              close : we( {
                                                                                                value : () = > {
                                                                                                s ? r && V("env : attempt to close already closed tab!") : l()}
                                                                                                }),focus : we( {
                                                                                                  value : () = > {
                                                                                                    c && c.postMessage(we( {
                                                                                                      focus : !0
                                                                                                    }
                                                                                                  ))}
                                                                                                  }),closed : we( {
                                                                                                    get : () = >s
                                                                                                  }
                                                                                                  ),onclose : we( {
                                                                                                    get : () = >a,set : e=> {
                                                                                                      a = e
                                                                                                    }
                                                                                                    }),name : we( {
                                                                                                      get : () = >n,set : e=> {
                                                                                                        i.run(() = > {
                                                                                                          c && c.postMessage(we( {
                                                                                                            name : e
                                                                                                          }
                                                                                                        ))}
                                                                                                      )}
                                                                                                    })}
                                                                                                    )),d
                                                                                                  }
                                                                                                  ,setValue : v.set,getValue : v.get,deleteValue : v.remove,listValues : v.list,urlChange : h,addValueChangeListener : v.registerChangeListener,removeValueChangeListener : v.unregisterChangeListener,getResourceText : I.getText,getResourceURL : I.getUrl,notification : q,xmlhttpRequest : j,cookie : Y,setTab : D.set,getTab : D.get,getTabs : D.getAll,log : o(f.grant,g.log) ? function() {
                                                                                                  _(G,this,arguments)}
                                                                                                  :void 0,download : o(f.grant,g.download) ? (...e) = > {
                                                                                                    const t = Ee(e,0),n = "Object" === l(t) ? t:we( {
                                                                                                    url : t,name : Ee(e,1)}
                                                                                                    ),o = (e,t) = > {
                                                                                                      t = t || we( {
                                                                                                      }
                                                                                                      ),e && d.setTimeout(() = > {
                                                                                                      _(e,t,[t])}
                                                                                                    ,1)}
                                                                                                    ;
                                                                                                    let {
                                                                                                      url : r
                                                                                                    }
                                                                                                    =n;
                                                                                                    const {
                                                                                                      name : s,headers : a,saveAs : i
                                                                                                    }
                                                                                                    =n;
                                                                                                    let c = Pe.connect("download");
                                                                                                    return c.onMessage.addListener(e = > {
                                                                                                      try {
                                                                                                      e.load ? n.onload && o(n.onload,e.data) : e.progress ? n.onprogress && o(n.onprogress,e.data) : e.timeout ? n.ontimeout && o(n.ontimeout,e.data) : n.onerror && o(n.onerror,e.data)}
                                                                                                      catch(e) {
                                                                                                      G("env : Error : TM_download - ",e,n)}
                                                                                                      }),c.onDisconnect.addListener(() = > {
                                                                                                        c = null
                                                                                                      }
                                                                                                      ),(e = > {
                                                                                                        const t = () = > {
                                                                                                        e && (e(),e = null)}
                                                                                                        ;
                                                                                                        if(m.blob_download_supported || "blob : " !== z(r,0,5))t();
                                                                                                        else {
                                                                                                          const e = new u.XMLHttpRequest;
                                                                                                          de(e,"GET",r),e.responseType = "blob",e.onload = () = > {
                                                                                                            4== e.readyState && J(Ae.blob2str(e.response),e = > {
                                                                                                              try {
                                                                                                                r = "data : application / octet - stream;
                                                                                                              base64,"+Ae.Base64.encode(e)}
                                                                                                              catch(e) {
                                                                                                              F("env : Error : TM_download - ",e,n)}
                                                                                                            t()}
                                                                                                          )}
                                                                                                          ,e.onerror = e.ontimeout = () = > {
                                                                                                          t()}
                                                                                                        ,_e(e)}
                                                                                                        })(() = > {
                                                                                                          c && c.postMessage(we( {
                                                                                                            details : we( {
                                                                                                              url : r,name : s,headers : a,saveAs : i
                                                                                                            }
                                                                                                            ),uuid : f.uuid
                                                                                                          }
                                                                                                        ))}
                                                                                                        ),we( {
                                                                                                          abort : () = > {
                                                                                                            c && c.postMessage(we( {
                                                                                                              cancel : !0
                                                                                                            }
                                                                                                          ))}
                                                                                                        })}
                                                                                                        :void 0,setClipboard : o(f.grant,g.setClipboard) ? e:void 0,addStyle : o(f.grant,g.addElement) ? (e,t) = >ee(we( {
                                                                                                          root : void 0,tag : "style",properties : we( {
                                                                                                            textContent : e
                                                                                                          }
                                                                                                          ),cb : t
                                                                                                        }
                                                                                                        )) : void 0,addElement : o(f.grant,g.addElement) ? (...e) = > {
                                                                                                          let t,n,o,r;
                                                                                                          const s = Ee(e,0),a = Ee(e,1),i = Ee(e,2),c = Ee(e,3);
                                                                                                          return"string "== typeof s ? (n = s,o = a,r = i) : (t = s,n = a,o = i,r = c),ee(we( {
                                                                                                            root : t,tag : n,properties : o,cb : r
                                                                                                          }
                                                                                                        ))}
                                                                                                        :void 0,closeTab : o(f.grant,g["window.close"]) ? e=> {
                                                                                                          ye.send("closeTab",we( {
                                                                                                            uuid : f.uuid
                                                                                                          }
                                                                                                        ),e ? () = >e() : null)}
                                                                                                        :void 0,focusTab : o(f.grant,g["window.focus"]) ? e=> {
                                                                                                          ye.send("focusTab",we( {
                                                                                                            uuid : f.uuid
                                                                                                          }
                                                                                                        ),e ? () = >e() : null)}
                                                                                                        :void 0
                                                                                                      }
                                                                                                      ;
                                                                                                    return i[c.script.uuid]=i[c.script.uuid] || we(ne),i[c.script.uuid]}
                                                                                                  })}
                                                                                                  )();
                                                                                                  var ke = (() = > {
                                                                                                    const t = (e,t,n,o,r) = > {
                                                                                                      const s = t[n],a = typeof s;
                                                                                                      return o && "string" === a ? t[n]=() = >d.eval(s) : r && "function" === a && (t[n]=function() {
                                                                                                      return _(s,r,arguments)}
                                                                                                    ),_(e,Se,t)}
                                                                                                    ,s = (e,t,n,o) = > {
                                                                                                      const r = we( {
                                                                                                      attrChange : 0,attrName : null,bubbles : !0,cancelBubble : !1,cancelable : !1,clipboardData : void 0,currentTarget : null,defaultPrevented : !1,eventPhase : 0,newValue : null,prevValue : null,relatedNode : null,returnValue : !0,srcElement : null,target : null,timeStamp : be()}
                                                                                                      ),s = "string "== typeof n ? () = >d.eval(n) : n,i = new Event(e);
                                                                                                      y(U(r),e = > {
                                                                                                      a(i,e,r[e])}
                                                                                                      ),y(U(t),e = > {
                                                                                                      a(i,e,t[e])}
                                                                                                    ),_(s,o,[i])}
                                                                                                    ,p = (e,t,r) = > {
                                                                                                      (n || o) && G("env : postLoadEvent!");
                                                                                                      const a = we( {
                                                                                                        attrName : "null",newValue : "null",prevValue : "null",eventPhase : he,attrChange : ve,target : r=r || Le,relatedNode : r,srcElement : r
                                                                                                      }
                                                                                                      );
                                                                                                    s(Ce,a,e,t)}
                                                                                                    ,g = (e,t,r) = > {
                                                                                                      (n || o) && G("env : postDomEventListener!");
                                                                                                      const a = we( {
                                                                                                        attrName : "null",newValue : "null",prevValue : "null",eventPhase : he,attrChange : ve,target : r=r || Le,relatedNode : r,srcElement : r
                                                                                                      }
                                                                                                      );
                                                                                                    s(Oe,a,e,t)}
                                                                                                    ,b = (e,t) = >(void 0 === t && (t = 100),t && e && ( e== Le || b(e.parentNode,t - 1))),E = (() = > {
                                                                                                      let t = null;
                                                                                                      return n = > {
                                                                                                        t || (t = we( {
                                                                                                          instance : n,is_open : !1
                                                                                                        }
                                                                                                        ),y(["write","writeln","open","close"],o = > {
                                                                                                          t[o]=n[o],n[o]=function() {
                                                                                                            let r = !1;
                                                                                                            - 1!= C(["write","writeln","open"],o) ? t.is_open ? r=!0 : t.is_open = !0 : "close" === o && (t.is_open = !1),!r && t.is_open && ye.send("document.write");
                                                                                                            const s = Le.documentElement,a = _(t[o],n,arguments);
                                                                                                            if(!r && t.is_open)return s !== Le.documentElement && (t.instance !== n && (t = null,E(Le)),y(e.write_listeners,e = > {
                                                                                                            e(Le)}
                                                                                                            )),a
                                                                                                          }
                                                                                                        }))}
                                                                                                        })(),x = we( {
                                                                                                        }
                                                                                                        );
                                                                                                        let O = [],R = [];
                                                                                                        const k = (s,i,c) = > {
                                                                                                          let l,u;
                                                                                                          const m = () = > {
                                                                                                            try {
                                                                                                              null.getSafeError
                                                                                                            }
                                                                                                            catch(e) {
                                                                                                              u = e.constructor
                                                                                                            }
                                                                                                            return u
                                                                                                          }
                                                                                                          ;
                                                                                                          if(y(R,e = > {
                                                                                                          e.object === s && (l = !0)}
                                                                                                          ),!l) {
                                                                                                            const l = we( {
                                                                                                              object : s,addEventListener : s.addEventListener,removeEventListener : s.removeEventListener
                                                                                                            }
                                                                                                            );
                                                                                                            R = T(R,l);
                                                                                                            let f = [];
                                                                                                            const h = e=> {
                                                                                                              for(let t = 0;
                                                                                                              t<f.length;
                                                                                                              t++)if(f[t].fn === e)return t
                                                                                                            }
                                                                                                            ;
                                                                                                            s.removeEventListener = function(e,t,n) {
                                                                                                              const o = n && "boolean "!= typeof n ? !!n.capture : !!n;
                                                                                                              let r,s,a;
                                                                                                              if(void 0 === (r = h(t)) || !(s = f[r].listeners))return _(l.removeEventListener,this,arguments);
                                                                                                              (a = s[`$ {
                                                                                                                e
                                                                                                              }
                                                                                                              -$ {
                                                                                                                o
                                                                                                              }
                                                                                                              `]) && (_(l.removeEventListener,this,[e,a,n]),delete s[`$ {
                                                                                                                e
                                                                                                              }
                                                                                                              -$ {
                                                                                                                o
                                                                                                              }
                                                                                                            `]),I(s).length || (f = M(f,r,1).result)}
                                                                                                            ;
                                                                                                            const b = (e,t,n,o) = > {
                                                                                                              const r = o && "boolean "!= typeof o ? !!o.capture : !!o;
                                                                                                              if(t) {
                                                                                                                let o = O.length;
                                                                                                                const s = d.parseInt(L([ n== Oe ? 1:2,r ? 1:2,r ? t:3 - t,be()],"0"));
                                                                                                                for(let e = 0;
                                                                                                                e<O.length;
                                                                                                                e++) {
                                                                                                                  const t = O[e];
                                                                                                                  if(!t || !t.prio || t.prio>s) {
                                                                                                                    o = e;
                                                                                                                    break
                                                                                                                  }
                                                                                                                  }O = M(O,o,0,we( {
                                                                                                                    prio : s,fn : e
                                                                                                                  }
                                                                                                                  )).result
                                                                                                                }
                                                                                                                else O = T(O,we( {
                                                                                                                  fn : e
                                                                                                                }
                                                                                                              ))}
                                                                                                              ;
                                                                                                              s.addEventListener = function(s,a,y) {
                                                                                                                (n || o) && G("env : addEventListener "+s);
                                                                                                                const w = this;
                                                                                                                if(a && ( 1== i&&  s== Ce || s==Oe || s==Te)) {
                                                                                                                  const n = y && "boolean "!= typeof y ? !!y.capture : !!y;
                                                                                                                  let o,M;
                                                                                                                  try {
                                                                                                                    let e = (u || m())();
                                                                                                                    const t = e.stack || e.stacktrace;
                                                                                                                    if(t) {
                                                                                                                      const e = Q(t,"\n");
                                                                                                                      for(let t,n = 0;
                                                                                                                      n<e.length && (!(t = xe(Ee(e,n),"tms_","\\$")) || !(o = x["tms_"+t]));
                                                                                                                      n++);
                                                                                                                    }
                                                                                                                    }catch(e) {
                                                                                                                    r && $("env : Error : event "+s,e)}
                                                                                                                    if(o && "document - idle" !== o.run_at) {
                                                                                                                      let t = null;
                                                                                                                      if( s== Ce ? e.pageLoaded && (t = () = > {
                                                                                                                      o.load_fired = !0,p(a,w,w.document || w)}
                                                                                                                      ,b(t,i,s,y)) : s== Oe && e.domContentLoaded && !o.load_fired && (t = () = > {
                                                                                                                      g(a,w,w.document || w)}
                                                                                                                      ,b(t,i,s,y)),t) {
                                                                                                                        const e = () = > {
                                                                                                                          if(O.length) {
                                                                                                                            const e = S(O);
                                                                                                                          e && e.fn && e.fn()}
                                                                                                                        };
                                                                                                                      return void d.setTimeout(e,1)}
                                                                                                                      }const E = function(e) {
                                                                                                                      return t(v,[a,this,c(e)],0,!0,w)}
                                                                                                                      ;
                                                                                                                      return void 0 === (M = h(a)) && (M = f.length,f = T(f,we( {
                                                                                                                        fn : a,listeners : we( {
                                                                                                                        }
                                                                                                                      )}
                                                                                                                      ))),f[M].listeners[`$ {
                                                                                                                        s
                                                                                                                      }
                                                                                                                      -$ {
                                                                                                                        n
                                                                                                                      }
                                                                                                                    `]=E,_(l.addEventListener,w,[s,E,y])}
                                                                                                                  return _(l.addEventListener,w,arguments)}
                                                                                                                  ;
                                                                                                                  try {
                                                                                                                    const e = () = >"[native code]";
                                                                                                                    y([s.addEventListener,s.removeEventListener],t = > {
                                                                                                                    a(t,"toString",e)}
                                                                                                                  )}
                                                                                                                  catch(e) {
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                              ,q = e=> {
                                                                                                                e.__evaluate || (A(e,we( {
                                                                                                                  __evaluate : we( {
                                                                                                                    value : e.evaluate,enumerable : !1,configurable : !1
                                                                                                                  }
                                                                                                                )}
                                                                                                                )),e.evaluate = function(e,t,o,r,s) {
                                                                                                                  let a;
                                                                                                                  if(n && G("env : document.evaluate "+e),t || (t = this),"undefined "!= typeof XPathResult) {
                                                                                                                    let i = e,c = null;
                                                                                                                    try {
                                                                                                                    a = this.__evaluate(i,t,o,r,s)}
                                                                                                                    catch(e) {
                                                                                                                      c = e
                                                                                                                    }
                                                                                                                    let l,d = !1;
                                                                                                                    try {
                                                                                                                      d = d || !!a.snapshotLength
                                                                                                                    }
                                                                                                                    catch(e) {
                                                                                                                    }
                                                                                                                    try {
                                                                                                                      d = d || !!a.singleNodeValue
                                                                                                                    }
                                                                                                                    catch(e) {
                                                                                                                    }
                                                                                                                    if(d || ". "== (l = z(e,0,1)) || b(t))n && G("env : queried document for "+i);
                                                                                                                    else {
                                                                                                                      n && G("env : query added elem for "+i),i = (" / "== l ? "." : "./")+e;
                                                                                                                      try {
                                                                                                                      a = this.__evaluate(i,t,o,r,s)}
                                                                                                                      catch(e) {
                                                                                                                      }
                                                                                                                      }if(n && G("env : query returned ",a,c),!d && c)throw c
                                                                                                                    }
                                                                                                                    else n && G("env : XPathResul t== undefined,but selectNodes via ",e),a = t.selectNodes(e);
                                                                                                                    return a
                                                                                                                  }
                                                                                                                  ,Ie.push(() = > {
                                                                                                                    e.evaluate = e.__evaluate
                                                                                                                  }
                                                                                                                ))}
                                                                                                                ,B = () = >((e,t,n) = > {
                                                                                                                  const o = D(t);
                                                                                                                  return y(U(o),n = > {
                                                                                                                    const r = o[n],s = r?we(r) : void 0;
                                                                                                                    s && s.get && !f(s.get) || ("function "== typeof t[n]?e[n]=h(t[n],t) : (() = > {
                                                                                                                      const o = n;
                                                                                                                      P(e,o,we( {
                                                                                                                      get : () = >t[o]}
                                                                                                                    ))}
                                                                                                                  )())}
                                                                                                                  ),y(U(n),t = > {
                                                                                                                  e[t]=n[t]}
                                                                                                                  ),e
                                                                                                                }
                                                                                                                )(we( {
                                                                                                                }
                                                                                                                ),d.console,we( {
                                                                                                                debug : V,log : G,info : j,warn : F,error : $}
                                                                                                                ));
                                                                                                                return we( {
                                                                                                                  create : o=> {
                                                                                                                    const s = o.script,p = we( {
                                                                                                                    }
                                                                                                                    ),g = -1 !== C(s.grant,"none"),f = `$ {
                                                                                                                      s.namespace
                                                                                                                    }
                                                                                                                    _$ {
                                                                                                                      g
                                                                                                                    }
                                                                                                                    `;
                                                                                                                    void 0 === e.props[f] && (e.props[f]=we( {
                                                                                                                      sandboxes : we( {
                                                                                                                      }
                                                                                                                      ),elements : we( {
                                                                                                                      }
                                                                                                                    )}
                                                                                                                    ),Ie.push(() = > {
                                                                                                                      e.props[f]=null
                                                                                                                    }
                                                                                                                    )),p.CDATA = we( {
                                                                                                                      value : function(e) {
                                                                                                                        this.src = e,this.toString = function() {
                                                                                                                          return this.src
                                                                                                                        }
                                                                                                                        ,this.toXMLString = this.toString
                                                                                                                      }
                                                                                                                      }),p.uneval = we( {
                                                                                                                        value : e=> {
                                                                                                                          try {
                                                                                                                            return`\\$1 = $ {
                                                                                                                            N(e)}
                                                                                                                            ;
                                                                                                                          `}
                                                                                                                          catch(e) {
                                                                                                                          G(e)}
                                                                                                                        }
                                                                                                                      }
                                                                                                                      ),p.define = we( {
                                                                                                                        value : void 0
                                                                                                                      }
                                                                                                                      ),p.module = we( {
                                                                                                                        value : void 0
                                                                                                                      }
                                                                                                                      ),p.exports = we( {
                                                                                                                        value : void 0
                                                                                                                      }
                                                                                                                      );
                                                                                                                      const v = we( {
                                                                                                                      }
                                                                                                                      ),h = we( {
                                                                                                                      }
                                                                                                                      ),b = we( {
                                                                                                                      }
                                                                                                                      ),M = we( {
                                                                                                                      }
                                                                                                                      ),S = De.of(o);
                                                                                                                      if(g);
                                                                                                                      else {
                                                                                                                        p.window = we( {
                                                                                                                          value : "context",overwrite : !0
                                                                                                                        }
                                                                                                                        ),p.globalThis = we( {
                                                                                                                          value : "context",overwrite : !0
                                                                                                                        }
                                                                                                                        ),p.unsafeWindow = we( {
                                                                                                                          value : Se
                                                                                                                        }
                                                                                                                        ),p.console = we( {
                                                                                                                        value : B()}
                                                                                                                        ),p.cloneInto = we( {
                                                                                                                          value : e=>e
                                                                                                                        }
                                                                                                                        ),p.exportFunction = we( {
                                                                                                                        value : (e,t,n) = >(n && void 0 !== n.defineAs && (t[n.defineAs]=e),e)}
                                                                                                                        ),p.createObjectIn = we( {
                                                                                                                          value : (e,t) = > {
                                                                                                                            const n = we( {
                                                                                                                            }
                                                                                                                            );
                                                                                                                            return t && void 0 !== t.defineAs && (e[t.defineAs]=n),n
                                                                                                                          }
                                                                                                                          }),v.addStyle = S.addStyle,v.addElement = S.addElement,v.deleteValue = S.deleteValue,v.listValues = S.listValues,v.getValue = S.getValue,v.setValue = S.setValue,v.log = S.log,v.registerMenuCommand = S.registerMenuCommand,v.unregisterMenuCommand = S.unregisterMenuCommand,v.openInTab = S.openInTab,v.addValueChangeListener = S.addValueChangeListener,v.removeValueChangeListener = S.removeValueChangeListener,M.xmlhttpRequest = S.xmlhttpRequest,M.download = S.download,v.webRequest = S.webRequest,h.getTab = S.getTab,v.setTab = S.setTab,v.saveTab = S.setTab,h.getTabs = S.getTabs,v.getResourceText = S.getResourceText,M.getResourceURL = S.getResourceURL,h.setClipboard = S.setClipboard ? we( {
                                                                                                                            cb : 2,fn : S.setClipboard
                                                                                                                          }
                                                                                                                          ) : void 0;
                                                                                                                          const e = e=>function() {
                                                                                                                            const t = H(_(e,this,arguments));
                                                                                                                            return a(t,"then",e = >J(t,e)),a(t,"catch",e = >W(t,e)),t
                                                                                                                          }
                                                                                                                          ,t = (e,t) = > {
                                                                                                                            let n;
                                                                                                                            const o = new d.Promise((o,r) = > {
                                                                                                                              const s = we( {
                                                                                                                              }
                                                                                                                              ),a = t.onload,i = t.ontimeout,c = t.onerror;
                                                                                                                              y(U(t),e = > {
                                                                                                                              s[e]=t[e]}
                                                                                                                              ),s.onerror = function(e) {
                                                                                                                              r(e),c && _(c,this,arguments)}
                                                                                                                              ,s.ontimeout = function(e) {
                                                                                                                              r(e),i && _(i,this,arguments)}
                                                                                                                              ,s.onload = function(e) {
                                                                                                                              o(e),a && _(a,this,arguments)}
                                                                                                                              ;
                                                                                                                              const l = e(s).abort;
                                                                                                                              !0 === n ? l() : n=l
                                                                                                                            }
                                                                                                                            );
                                                                                                                            return a(o,"abort",() = > {
                                                                                                                              n ? n() : n=!0
                                                                                                                            }
                                                                                                                            ),o
                                                                                                                          }
                                                                                                                          ;
                                                                                                                          y(U(M),e = > {
                                                                                                                            const t = M[e];
                                                                                                                            void 0 !== t && (b["GM_"+e]=we( {
                                                                                                                              value : t
                                                                                                                            }
                                                                                                                          ))}
                                                                                                                          ),y(U(h),e = > {
                                                                                                                            const t = h[e];
                                                                                                                            void 0 !== t && (b["GM_"+e]=we( {
                                                                                                                              value : t.fn || t
                                                                                                                            }
                                                                                                                            ),b["GM."+e]=we( {
                                                                                                                              value : function() {
                                                                                                                                let e,n = [];
                                                                                                                                if(void 0 === t.cb)e = t;
                                                                                                                                else {
                                                                                                                                  e = t.fn;
                                                                                                                                  for(let e = 0;
                                                                                                                                  e<t.cb;
                                                                                                                                e++)n = T(n,arguments[e] || void 0)}
                                                                                                                                return new d.Promise(t = > {
                                                                                                                                _(e,this,T(n,[t]))}
                                                                                                                              )}
                                                                                                                            }))}
                                                                                                                            ),y(U(v),t = > {
                                                                                                                              const n = v[t];
                                                                                                                              void 0 !== n && (b["GM_"+t]=we( {
                                                                                                                                value : n
                                                                                                                              }
                                                                                                                              ),b["GM."+t]=we( {
                                                                                                                              getter : () = >e(n)}
                                                                                                                            ))}
                                                                                                                            ),b["GM.getResourceUrl"]=M.getResourceURL ? we( {
                                                                                                                            getter : () = >e(M.getResourceURL)}
                                                                                                                            ) : void 0,b["GM.xmlHttpRequest"]=M.xmlhttpRequest ? we( {
                                                                                                                              value : (() = > {
                                                                                                                                const e = e=>t(M.xmlhttpRequest,e);
                                                                                                                                return y(U(M.xmlhttpRequest),t = >a(e,t,M.xmlhttpRequest[t])),e
                                                                                                                              }
                                                                                                                            )()}
                                                                                                                            ) : void 0,b["GM.download"]=M.download ? we( {
                                                                                                                            value : e=>t(M.download,e)}
                                                                                                                            ) : void 0;
                                                                                                                            const n = S.notification ? (e,t,n,o) = > {
                                                                                                                              let r = null,a = null;
                                                                                                                              const i = we( {
                                                                                                                              }
                                                                                                                              );
                                                                                                                              "object "== typeof e && (a = e),a ? (y(["timeout","text","image","title","highlight","silent"],e = > {
                                                                                                                              i[e]=a[e]}
                                                                                                                            ),r = a.ondone,o = a.onclick,"function "== typeof t && (r = t)) : (i.image = n,i.text = e,i.title = t),i.text && (i.image = i.image || s.icon64 || s.icon,i.title = i.title || s.name),i.onclick = o,i.ondone = r,S.notification(i)}
                                                                                                                            :void 0;
                                                                                                                            b.GM_notification = n?we( {
                                                                                                                              value : n
                                                                                                                            }
                                                                                                                            ) : void 0,b["GM.notification"]=n ? we( {
                                                                                                                              value : (e,t,o,r) = > {
                                                                                                                                let s;
                                                                                                                                return s = "object "== typeof e ? e:we( {
                                                                                                                                  text : e,title : t,image : o,onclick : r
                                                                                                                                }
                                                                                                                                ),new d.Promise(e = > {
                                                                                                                                  let t = we( {
                                                                                                                                  }
                                                                                                                                  );
                                                                                                                                  y(U(s),e = > {
                                                                                                                                  t[e]=s[e]}
                                                                                                                                  );
                                                                                                                                  const o = t.ondone;
                                                                                                                                  t.ondone = function(...t) {
                                                                                                                                  o && _(o,this,t),_(e,this,t)}
                                                                                                                                ,n(t)}
                                                                                                                              )}
                                                                                                                              }) : void 0,b.GM_cookie = S.cookie ? we( {
                                                                                                                                value : (() = > {
                                                                                                                                  const e = S.cookie,t = (t,n,o) = >(e[t] || (() = > {
                                                                                                                                  }
                                                                                                                                  ))(n,o);
                                                                                                                                  return y(U(e),n = > {
                                                                                                                                  a(t,n,e[n])}
                                                                                                                                  ),t
                                                                                                                                }
                                                                                                                              )()}
                                                                                                                              ) : void 0,b["GM.cookie"]=S.cookie ? we( {
                                                                                                                                value : (() = > {
                                                                                                                                  const e = S.cookie,t = we( {
                                                                                                                                  }
                                                                                                                                  );
                                                                                                                                  return y(U(e),e = > {
                                                                                                                                    t[e]=t = >((e,t) = >new d.Promise((n,o) = > {
                                                                                                                                      "list "== e ? b.GM_cookie.value[e](t,(e,t) = > {
                                                                                                                                      t ? o(t) : n(e)}
                                                                                                                                      ) : b.GM_cookie.value[e](t,e = > {
                                                                                                                                      e ? o(e) : n()}
                                                                                                                                    )}
                                                                                                                                  ))(e,t)}
                                                                                                                                  ),t
                                                                                                                                }
                                                                                                                              )()}
                                                                                                                              ) : void 0
                                                                                                                            }
                                                                                                                            b.GM_info = b["GM.info"]=S.getInfo ? we( {
                                                                                                                              getter : S.getInfo
                                                                                                                            }
                                                                                                                            ) : void 0;
                                                                                                                            const O = we( {
                                                                                                                            }
                                                                                                                            );
                                                                                                                            var R,I,D,j;
                                                                                                                            p.GM = we( {
                                                                                                                              value : O,protect : !0
                                                                                                                            }
                                                                                                                            ),R = p,I = s.grant,D = b,void 0 === (j = (e,t) = > {
                                                                                                                              if("GM." !== z(e,0,3))return t.protect = !0,t;
                                                                                                                              e = Ee(Q(e,"."),1),P(O,e,we( {
                                                                                                                                get : t.getter ? t.getter : () = >t.value
                                                                                                                              }
                                                                                                                            ))}
                                                                                                                            ) && (j = (e,t) = >t),y(T(["GM_info","GM.info"],I),e = > {
                                                                                                                              let t;
                                                                                                                              const n = D[e];
                                                                                                                            n && (t = j(e,n)) && (R[e]=t)}
                                                                                                                            ),s.options.compat_prototypes && ((n || r) && G("env : option : add toSource"),i(u.Object.prototype,"toSource") || A(u.Object.prototype,we( {
                                                                                                                              toSource : we( {
                                                                                                                                value : function() {
                                                                                                                                  const e = l(this);
                                                                                                                                  if("String" === e)return`(String("$ {
                                                                                                                                  ee(this,'"','\\"')}
                                                                                                                                  "))`;
                                                                                                                                  if("Number" === e)return`(Number("$ {
                                                                                                                                  d.Number(this)}
                                                                                                                                  "))`;
                                                                                                                                  if("Array" === e) {
                                                                                                                                    const e = this;
                                                                                                                                    let t = "(new Array(";
                                                                                                                                    for(let n = 0;
                                                                                                                                    n<e.length;
                                                                                                                                    n++) {
                                                                                                                                      const o = e[n],r = l(o);
                                                                                                                                    t += "Null" === r ? "null" : "Undefined" === r ? "undefined" : e[n].toSource(),n+1<e.length && (t += ",")}
                                                                                                                                    return t += "))",t
                                                                                                                                  }
                                                                                                                                  return`JSON.parse(unescape("$ {
                                                                                                                                  d.escape(N(this))}
                                                                                                                                "))`}
                                                                                                                                ,enumerable : !1,writable : !0,configurable : !0
                                                                                                                              }
                                                                                                                            )}
                                                                                                                            )),(n || r) && G("env : option : add some array generics"),y(["indexOf","lastIndexOf","filter","forEach","every","map","some","slice"],e = > {
                                                                                                                              if("function "!= typeof d.Array[e]) {
                                                                                                                                const t = we( {
                                                                                                                                }
                                                                                                                                );
                                                                                                                                t[e]=we( {
                                                                                                                                  value : function(t) {
                                                                                                                                  return _(d.Array.prototype[e],t,w(arguments,1))}
                                                                                                                                  ,enumerable : !1,writable : !0,configurable : !0
                                                                                                                                }
                                                                                                                              ),A(d.Array,t)}
                                                                                                                            }));
                                                                                                                            let F,X = "";
                                                                                                                            if(g)F = we( {
                                                                                                                            }
                                                                                                                            );
                                                                                                                            else {
                                                                                                                              const e = (K = S,Z = t=> {
                                                                                                                              q(t),E(t),k(t,2,e.filterEvent)}
                                                                                                                              ,(() = > {
                                                                                                                                const e = function(e,n) {
                                                                                                                                  if("urlchange "!= e|| !K.urlChange)return t(d.addEventListener,arguments,1,!0);
                                                                                                                                K.urlChange.register(n)}
                                                                                                                                ,n = function(e,n) {
                                                                                                                                  if("urlchange "!= e|| !K.urlChange)return t(d.removeEventListener,arguments,1,!0);
                                                                                                                                K.urlChange.unregister(n)}
                                                                                                                                ,o = we( {
                                                                                                                                  setTimeout : we( {
                                                                                                                                  value : (...e) = >t(Re.setTimeout,e,0,!0,s)}
                                                                                                                                  ),setInterval : we( {
                                                                                                                                  value : (...e) = >t(Re.setInterval,e,0,!0,s)}
                                                                                                                                  ),close : K.closeTab ? we( {
                                                                                                                                    get : () = >d.sel f== d.top ? e=>K.closeTab(e) : d.close
                                                                                                                                  }
                                                                                                                                  ) : void 0,focus : K.focusTab ? we( {
                                                                                                                                  get : () = >e = >K.focusTab(e)}
                                                                                                                                  ) : void 0,onurlchange : K.urlChange ? (r = null,we( {
                                                                                                                                    get : () = >r,set : t=> {
                                                                                                                                    r && n("urlchange",r),e("urlchange",r = t)}
                                                                                                                                    })) : void 0,location : we( {
                                                                                                                                      set : e=> {
                                                                                                                                        d.location.href = e
                                                                                                                                      }
                                                                                                                                      }),name : we( {
                                                                                                                                        get : () = >Se.name,set : e=> {
                                                                                                                                          Se.name = e
                                                                                                                                        }
                                                                                                                                        }),document : we( {
                                                                                                                                          get : () = > {
                                                                                                                                            const e = d.document;
                                                                                                                                            return Z(e),e
                                                                                                                                          }
                                                                                                                                          }),clearInterval : we( {
                                                                                                                                            get : () = >d.clearInterval
                                                                                                                                          }
                                                                                                                                          ),clearTimeout : we( {
                                                                                                                                            get : () = >d.clearTimeout
                                                                                                                                          }
                                                                                                                                          ),addEventListener : we( {
                                                                                                                                            value : e
                                                                                                                                          }
                                                                                                                                          ),removeEventListener : we( {
                                                                                                                                            value : n
                                                                                                                                          }
                                                                                                                                        )}
                                                                                                                                        );
                                                                                                                                        var r;
                                                                                                                                        y(U(u),e = > {
                                                                                                                                          const t = u[e];
                                                                                                                                          void 0 !== t && t !== Se && (o[e]=o[e] || we( {
                                                                                                                                            value : t
                                                                                                                                          }
                                                                                                                                        ))}
                                                                                                                                        );
                                                                                                                                        const s = c(o),a = we( {
                                                                                                                                          context : s,filter : e=> e== Se ? s:e,filterEvent : function(e) {
                                                                                                                                            const t = we( {
                                                                                                                                            }
                                                                                                                                            );
                                                                                                                                            for(const n in e)if("function "== typeof e[n])t[n]=(() = > {
                                                                                                                                              const t = n;
                                                                                                                                              return function() {
                                                                                                                                              return _(e[t],e,arguments)}
                                                                                                                                            })();
                                                                                                                                            else {
                                                                                                                                              const o = a.filter(e[n]);
                                                                                                                                              t[n]=o
                                                                                                                                            }
                                                                                                                                            return t
                                                                                                                                          }
                                                                                                                                        });
                                                                                                                                        return a
                                                                                                                                      }
                                                                                                                                      )()),n = we( {
                                                                                                                                        run_at : s.options.run_at,uuid : s.uuid
                                                                                                                                      }
                                                                                                                                      );
                                                                                                                                      X = "tms_"+ee(s.uuid," - ","_"),((e,t) = > {
                                                                                                                                        x[e]=t,d.addEventListener("load",() = > {
                                                                                                                                        d.setTimeout(() = >delete x[e],1)}
                                                                                                                                      )}
                                                                                                                                      )(X,n),k(e.context,1,e.filterEvent),F = e.context
                                                                                                                                    }
                                                                                                                                    var K,Z;
                                                                                                                                    e.props[f].sandboxes[s.uuid]=F,e.props[f].elements[s.uuid]=p,(n || r) && V(`env : execute script $ {
                                                                                                                                      s.name
                                                                                                                                    }
                                                                                                                                    @ the $ {
                                                                                                                                    g ? "un" : ""}
                                                                                                                                    safe context now!`),((t,n,o,s,i,c) = > {
                                                                                                                                      const {
                                                                                                                                        name : l
                                                                                                                                      }
                                                                                                                                      =t;
                                                                                                                                      let u = null;
                                                                                                                                      const p = e=>ee(ee(e,'"','\\"'),"'","\\'"),g = () = >"[Tampermonkey property]";
                                                                                                                                      try {
                                                                                                                                        const r = s.sandboxes[t.uuid];
                                                                                                                                        let d = ["context","fapply"],f = ["undefined","undefined"];
                                                                                                                                        const v = s.elements[t.uuid];
                                                                                                                                        let h;
                                                                                                                                        y(U(v),e = > {
                                                                                                                                          const t = v[e];
                                                                                                                                          t.overwrite ? (d = T(d,e),f = T(f,t.value)) : (d = T(d,e),f = T(f,"context."+e),t.getter ? P(r,e,we( {
                                                                                                                                            get : t.getter
                                                                                                                                          }
                                                                                                                                        )) : r[e]=t.value),t.protect && r[e] && a(r[e],"toString",g)}
                                                                                                                                        );
                                                                                                                                        const b = !t.options.unwrap;
                                                                                                                                        u = L(b ? ["((context,fapply,console) = > {
                                                                                                                                          ","with (context) {
                                                                                                                                            ","(module = > {
                                                                                                                                              ",'"use strict";
                                                                                                                                              ',"try {
                                                                                                                                                ",m.measure_scripts ? `console.time("$ {
                                                                                                                                                  h = `SCRIPT RUN TIME[$ {
                                                                                                                                                  p(l)}
                                                                                                                                                ]`}
                                                                                                                                                ");
                                                                                                                                                \n`:"","fapply(module,context,[",L(f,","),"]);
                                                                                                                                                ",m.measure_scripts ? `console.timeEnd("$ {
                                                                                                                                                  h
                                                                                                                                                }
                                                                                                                                                ");
                                                                                                                                              \n`:"","}
                                                                                                                                              catch (e) {
                                                                                                                                                ","if (e.message && e.stack) {
                                                                                                                                                  ","console.error(\"ERROR : Execution of script '",p(l),"' failed! \"+e.message);
                                                                                                                                                  ","console.log(e.stack);
                                                                                                                                                ","}
                                                                                                                                                else {
                                                                                                                                                  ","console.error(e);
                                                                                                                                                ","}
                                                                                                                                              ","}
                                                                                                                                            ","}
                                                                                                                                            )","("+(m.top_level_await ? "async " : "")+"function ",i ? i+"$" : "","(",L(d,","),") {
                                                                                                                                              ",m.enforce_strict_mode ? '"use strict";
                                                                                                                                            \n' : "",o,n,"\n","}
                                                                                                                                          )","}
                                                                                                                                        ","}
                                                                                                                                        )(that.context,that.fapply,that.console);
                                                                                                                                        \n",c ? `//# sourceURL = $ {
                                                                                                                                          c
                                                                                                                                        }
                                                                                                                                        \n`:""]:[o,n,"\n",c ? `//# sourceURL = $ {
                                                                                                                                          c
                                                                                                                                        }
                                                                                                                                        \n`:""],"");
                                                                                                                                        const w = we( {
                                                                                                                                        context : r,fapply : _,console : B()}
                                                                                                                                        );
                                                                                                                                      e.E_u(u,w,b)}
                                                                                                                                      catch(e) {
                                                                                                                                        return void De.syntaxCheck(L([o,n],""),t = > {
                                                                                                                                          let s = "";
                                                                                                                                          if(t.errors) {
                                                                                                                                            const e = Q(o,"\n").length - 1;
                                                                                                                                            let n = "";
                                                                                                                                            t.errors && y(U(t.errors),o = > {
                                                                                                                                              const r = t.errors[o];
                                                                                                                                              if(r && r.line>=0 && r.reason) {
                                                                                                                                                const t = r.line;
                                                                                                                                              n += L([t>e ? "script : ":"require : "," (",r.code,") ","." === z(r.reason,-1) ? Y(r.reason,0,-1) : r.reason," on line : ",t>e ? t-e : t," at character : ",r.character,"\n"],"")}
                                                                                                                                              }),s = "Linter output : \n"+n
                                                                                                                                            }
                                                                                                                                            else s = n;
                                                                                                                                            const a = e.stack ? e.stack : "";
                                                                                                                                            r || t.errors ? $(`Syntax error @ "$ {
                                                                                                                                              l
                                                                                                                                            }
                                                                                                                                            "!\n##########################\n$ {
                                                                                                                                              s
                                                                                                                                            }
                                                                                                                                            ##########################\n\n$ {
                                                                                                                                              a
                                                                                                                                            }
                                                                                                                                            `) : $(`Syntax error @ "$ {
                                                                                                                                              l
                                                                                                                                            }
                                                                                                                                            "!\n\n`,a),d.setTimeout(() = > {
                                                                                                                                              throw e
                                                                                                                                            }
                                                                                                                                          ,1)}
                                                                                                                                        )}
                                                                                                                                      })(s,o.code,o.requires,e.props[f],X,o.source_url)}
                                                                                                                                    })}
                                                                                                                                    )();
                                                                                                                                    (() = > {
                                                                                                                                      if(!m.external_connect)return;
                                                                                                                                      let e;
                                                                                                                                      if(e = Se.external) {
                                                                                                                                        const t = (e,t) = > {
                                                                                                                                        ye.send("external.message",e,t)}
                                                                                                                                        ;
                                                                                                                                        try {
                                                                                                                                          A(e,we( {
                                                                                                                                            Tampermonkey : we( {
                                                                                                                                              get : () = >we( {
                                                                                                                                                getVersion : e=> {
                                                                                                                                                  t(we( {
                                                                                                                                                  method : "getVersion"}
                                                                                                                                                ),e)}
                                                                                                                                                ,openOptions : (e,n) = > {
                                                                                                                                                  t(we( {
                                                                                                                                                    method : "openOptions",params : e
                                                                                                                                                  }
                                                                                                                                                ),n)}
                                                                                                                                                ,isInstalled : (e,n,o) = > {
                                                                                                                                                  "function "== typeof n && (o = n,n = null),t(we( {
                                                                                                                                                    method : "isInstalled",script : we( {
                                                                                                                                                      name : e,namespace : n
                                                                                                                                                    }
                                                                                                                                                  )}
                                                                                                                                                ),o)}
                                                                                                                                              }),configurable : !0
                                                                                                                                            }
                                                                                                                                          )}
                                                                                                                                        ))}
                                                                                                                                        catch(e) {
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                    )(),ye.onMessage.setListener(( {
                                                                                                                                      method : t,args : n
                                                                                                                                    }
                                                                                                                                    ) = > {
                                                                                                                                    "load "== t ? (e.pageLoaded = !0,Ue.runListeners()) : "DOMContentLoaded "== t ? (e.domContentLoaded = !0,Ue.runListeners()) : "setForeignAttr "== t ? Se[n.attr]=n.value : "port.message "== t ? Pe.message(n) : "executeScript "== t ? Ue.run(n) : "cleanup "== t ? ye.cleanup() : r && G("env : unkown method",t,n)}
                                                                                                                                    ),r && G("Tampermonkey started"),y(e.scripts,e = > {
                                                                                                                                    Ue.run(e)}
                                                                                                                                  )}
                                                                                                                                  },t = (self.rea,self.rea), {
                                                                                                                                    setTimeout : n,setInterval : o,clearTimeout : r,clearInterval : s,AbortController : a,fetch : i,XMLHttpRequest : c,webkitNotifications : l,decodeURIComponent : d,encodeURIComponent : u,Notification : p,TextDecoder : m,FileReader : g,DOMParser : f,unescape : _,escape : v,btoa : h,atob : b,alert : y,confirm : w,crypto : M,Worker : E
                                                                                                                                  }
                                                                                                                                  =(self.forge_sha256,self),x = e=> {
                                                                                                                                    let t;
                                                                                                                                    t = e.split(",")[0].includes("base64") ? b(e.split(",")[1]) : _(e.split(",")[1]);
                                                                                                                                    const n = e.split(",")[0].split(" : ")[1].split(";
                                                                                                                                    ")[0],o = new Uint8Array(t.length);
                                                                                                                                    for(let e = 0;
                                                                                                                                    e<t.length;
                                                                                                                                    e++)o[e]=t.charCodeAt(e);
                                                                                                                                    return new Blob([o], {
                                                                                                                                      type : n
                                                                                                                                    }
                                                                                                                                  )}
                                                                                                                                  ,S = e=>new Promise(t = > {
                                                                                                                                    const n = new g;
                                                                                                                                    n.onload = e=> {
                                                                                                                                      var n;
                                                                                                                                    t((null === (n = e.target) || void 0 === n ? void 0 : n.result) || void 0)}
                                                                                                                                  ,n.readAsDataURL(e)}
                                                                                                                                  ), {
                                                                                                                                    SHARED_OBJECT_URLS : L,SHARED_BLOBS : O,SAFARI : C
                                                                                                                                  }
                                                                                                                                  =t.FEATURES.RUNTIME,T = e=>void 0 !== e.objUrl,R = e=>void 0 !== e.blob,U = e=>void 0 !== e.dataUri;
                                                                                                                                  class A {
                                                                                                                                    constructor(e) {
                                                                                                                                      if(T(e))this.objUrl = e.objUrl.url,this.type = e.objUrl.type;
                                                                                                                                      else if(R(e))this.blob = e.blob;
                                                                                                                                      else {
                                                                                                                                        if(!U(e))throw new Error("incompatible TransferableData");
                                                                                                                                        this.dataUri = e.dataUri
                                                                                                                                      }
                                                                                                                                      }dispose() {
                                                                                                                                      this.objUrl && URL.revokeObjectURL(this.objUrl)}
                                                                                                                                      async toTransferableData() {
                                                                                                                                        if(L) {
                                                                                                                                          if(!this.objUrl && (!this.blob && this.dataUri && (this.blob = x(this.dataUri)),this.blob && (this.objUrl = URL.createObjectURL(this.blob)),!this.objUrl))throw new Error("incomplete Transferable");
                                                                                                                                          return {
                                                                                                                                            objUrl :  {
                                                                                                                                              url : this.objUrl,type : this.type
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                        if(O) {
                                                                                                                                          if(!this.blob && (this.objUrl ? this.blob = await i(this.objUrl).then(e = >e.blob()) : this.dataUri && (this.blob = x(this.dataUri)),!this.blob))throw new Error("incomplete Transferable");
                                                                                                                                          return {
                                                                                                                                            blob : this.blob
                                                                                                                                          }
                                                                                                                                          }if(C) {
                                                                                                                                            if(!this.dataUri) {
                                                                                                                                              let e = this.blob;
                                                                                                                                            if(!e && this.objUrl && (e = await i(this.objUrl).then(e = >e.blob())),e && (this.dataUri = await S(e)),!this.dataUri)throw new Error("incomplete Transferable")}
                                                                                                                                            return {
                                                                                                                                              dataUri : this.dataUri
                                                                                                                                            }
                                                                                                                                          }throw new Error("incompatible Transferable")}
                                                                                                                                          get tryObjectUrl() {
                                                                                                                                            return this.objUrl
                                                                                                                                          }
                                                                                                                                          get tryBlob() {
                                                                                                                                            return this.blob
                                                                                                                                          }
                                                                                                                                          get tryDataUri() {
                                                                                                                                            return this.dataUri
                                                                                                                                          }
                                                                                                                                          async toBlob() {
                                                                                                                                            if(this.blob)return this.blob;
                                                                                                                                            if(!this.objUrl) {
                                                                                                                                              if(this.dataUri)return x(this.dataUri);
                                                                                                                                            throw new Error("incompatible Transferable")}
                                                                                                                                            try {
                                                                                                                                            return await(await i(this.objUrl)).blob()}
                                                                                                                                            catch(e) {
                                                                                                                                              return
                                                                                                                                            }
                                                                                                                                            }async toDataUri() {
                                                                                                                                              if(this.dataUri)return this.dataUri;
                                                                                                                                               {
                                                                                                                                                const e = await this.toBlob();
                                                                                                                                                if(!e)throw new Error("incompatible Transferable");
                                                                                                                                              return await S(e)}
                                                                                                                                              }static fromTransferableData(e) {
                                                                                                                                                return e && (R(e) || T(e) || U(e)) ? new A(e) : void 0
                                                                                                                                              }
                                                                                                                                              }const P =  {
                                                                                                                                              addElement : ["GM_addElement","GM.addElement","GM_addStyle","GM.addStyle"],cookie : ["GM_cookie","GM.cookie"],readValues : ["GM_listValues","GM.listValues","GM_getValue","GM.getValue","GM_addValueChangeListener","GM.addValueChangeListener","GM_removeValueChangeListener","GM.removeValueChangeListener"],writeValues : ["GM_setValue","GM.setValue","GM_deleteValue","GM.deleteValue"],download : ["GM_download","GM.download"],getResource : ["GM_getResourceText","GM.getResourceText","GM_getResourceURL","GM.getResourceUrl"],tabs : ["GM_getTab","GM.getTab","GM_getTabs","GM.getTabs","GM_saveTab","GM.saveTab"],info : ["GM_info","GM.info"],log : ["GM_log","GM.log"],notification : ["GM_notification","GM.notification"],openInTab : ["GM_openInTab","GM.openInTab"],menuCommand : ["GM_registerMenuCommand","GM.registerMenuCommand","GM_unregisterMenuCommand","GM.unregisterMenuCommand"],setClipboard : ["GM_setClipboard","GM.setClipboard"],xmlHttpRequest : ["GM_xmlhttpRequest","GM.xmlHttpRequest"],"window.close" : ["window.close"],"window.focus" : ["window.focus"],"window.onurlchange" : ["window.onurlchange"],webRequest : ["GM_webRequest","GM.webRequest"]}
                                                                                                                                              ,I = t=> {
                                                                                                                                                const n = t.rea;
                                                                                                                                                let o;
                                                                                                                                                const r = () = >"xxxxxxxx - xxxx - 4xxx - yxxx - xxxxxxxxxxxx".replace(/[xy]/g,e = > {
                                                                                                                                                  const t = 16*Math.random()|0;
                                                                                                                                                return("x "== e ? t:3&t|8).toString(16)}
                                                                                                                                                ),s = e=> {
                                                                                                                                                  let t;
                                                                                                                                                  for(;
                                                                                                                                                  t = e.shift();
                                                                                                                                                )t()}
                                                                                                                                                ,a = (e,t) = > {
                                                                                                                                                  const n = document.createElementNS("http : //www.w3.org / 1999 / xhtml",e);
                                                                                                                                                  return"string "== typeof t ? n.append(t) : t && Object.keys(t).forEach(e = > {
                                                                                                                                                  "textContent "== e ? n.textContent = t[e]:n.setAttribute(e,t[e])}
                                                                                                                                                  ),n
                                                                                                                                                }
                                                                                                                                                ,i = r(),c = window.sel f== window.top;
                                                                                                                                                let l = 0;
                                                                                                                                                const d = ((e,t) = > {
                                                                                                                                                  const o = n.FEATURES.RUNTIME.FIREFOX ? e=>window.cloneInto(e,document.defaultView) : e=>e,r = e=> {
                                                                                                                                                    const t = ++d;
                                                                                                                                                    return u[d]=e,t
                                                                                                                                                  }
                                                                                                                                                  ,s = (n,r) = > {
                                                                                                                                                    const {
                                                                                                                                                      m : s,a,r : i,n : c
                                                                                                                                                    }
                                                                                                                                                    =r,l = ((e,n,r) = > {
                                                                                                                                                      let s;
                                                                                                                                                      return r ? (s = t.createEvent("MutationEvent"),s.initMutationEvent(e,!1,!1,r || null,null,null,JSON.stringify(n),s.ADDITION)) : s=new window.CustomEvent(e, {
                                                                                                                                                      detail : o(n)}
                                                                                                                                                      ),s
                                                                                                                                                    }
                                                                                                                                                    )(n, {
                                                                                                                                                      m : s,a,r : i
                                                                                                                                                    }
                                                                                                                                                    ,c);
                                                                                                                                                  e.dispatchEvent.apply(e,[l])}
                                                                                                                                                  ;
                                                                                                                                                  let a,i;
                                                                                                                                                  var c;
                                                                                                                                                  let l;
                                                                                                                                                  var d = 1,u =  {
                                                                                                                                                  }
                                                                                                                                                  ;
                                                                                                                                                  return {
                                                                                                                                                    init : t=> {
                                                                                                                                                      l || (l = t),c = "2P_"+l,i = "2C_"+l,((...t) = > {
                                                                                                                                                      e.addEventListener.apply(e,t)}
                                                                                                                                                      )(i,e = > {
                                                                                                                                                        const t = (n = e).detail || JSON.parse(n.attrName);
                                                                                                                                                        var n;
                                                                                                                                                        if("message.response "== t.m)((e,t) = > {
                                                                                                                                                          let n;
                                                                                                                                                        e && (n = u[e]) && (n(t),delete u[e])}
                                                                                                                                                        )(t.r,t.a);
                                                                                                                                                        else if(a) {
                                                                                                                                                          const n = t.r ? e=> {
                                                                                                                                                            s(c, {
                                                                                                                                                              m : "message.response",a : e,r : t.r
                                                                                                                                                            }
                                                                                                                                                          )}
                                                                                                                                                          :() = > {
                                                                                                                                                          }
                                                                                                                                                          ;
                                                                                                                                                          a( {
                                                                                                                                                            method : t.m,args : t.a,node : e.relatedNode,sendResponse : n
                                                                                                                                                          }
                                                                                                                                                        )}
                                                                                                                                                      },!1)}
                                                                                                                                                      ,send : (e,t,n) = > {
                                                                                                                                                        s(c, {
                                                                                                                                                          m : e,a : t,r : n?r(n) : null
                                                                                                                                                        }
                                                                                                                                                      )}
                                                                                                                                                      ,sendToId : (e,t,n) = > {
                                                                                                                                                        s("2P_"+e, {
                                                                                                                                                          m : t,a : n,r : null
                                                                                                                                                        }
                                                                                                                                                      )}
                                                                                                                                                      ,onMessage :  {
                                                                                                                                                        addListener : e=> {
                                                                                                                                                          a = e
                                                                                                                                                        }
                                                                                                                                                        },cleanup : () = > {
                                                                                                                                                          ((...t) = > {
                                                                                                                                                          e.removeEventListener.apply(e,t)}
                                                                                                                                                        )(i,a,!1)}
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                    )(window,document),u = (() = > {
                                                                                                                                                      const e =  {
                                                                                                                                                      }
                                                                                                                                                      ;
                                                                                                                                                      let t;
                                                                                                                                                      const n = t=> {
                                                                                                                                                        let n = [],o = [];
                                                                                                                                                        const r = () = > {
                                                                                                                                                        n = null,o = null,s = null,delete e[t]}
                                                                                                                                                        ;
                                                                                                                                                        var s =  {
                                                                                                                                                          postMessage : e=> {
                                                                                                                                                            d.send("port.message", {
                                                                                                                                                              response_id : t,value : e
                                                                                                                                                            }
                                                                                                                                                          )}
                                                                                                                                                          ,onMessage :  {
                                                                                                                                                            addListener : e=> {
                                                                                                                                                            n.push(e)}
                                                                                                                                                            },onDisconnect :  {
                                                                                                                                                              addListener : e=> {
                                                                                                                                                              o.push(e)}
                                                                                                                                                              },disconnect : () = > {
                                                                                                                                                                d.send("port.message", {
                                                                                                                                                                  response_id : t,disconnect : !0
                                                                                                                                                                }
                                                                                                                                                              ),r()}
                                                                                                                                                            };
                                                                                                                                                            return e[t]= {
                                                                                                                                                              message : e=> {
                                                                                                                                                                n && n.forEach(t = > {
                                                                                                                                                                t(e)}
                                                                                                                                                              )}
                                                                                                                                                              ,disconnect : e=> {
                                                                                                                                                                o && o.forEach(t = > {
                                                                                                                                                                t(e)}
                                                                                                                                                              ),r()}
                                                                                                                                                            },s
                                                                                                                                                          }
                                                                                                                                                          ;
                                                                                                                                                          return {
                                                                                                                                                            message : r=> {
                                                                                                                                                              let s;
                                                                                                                                                              if(r.connect)t && t(r.destination,n(r.response_id));
                                                                                                                                                              else {
                                                                                                                                                                if(!(s = e[r.response_id]))return void(o && console.warn("ports : unkown id",r.response_id,r));
                                                                                                                                                              r.disconnect ? s.disconnect() : s.message(r.value)}
                                                                                                                                                              },connect : e=> {
                                                                                                                                                                const t = r();
                                                                                                                                                                return d.send("port.message", {
                                                                                                                                                                  response_id : t,connect : !0,destination : e
                                                                                                                                                                }
                                                                                                                                                              ),n(t)}
                                                                                                                                                              ,onConnect :  {
                                                                                                                                                                addListener : e=> {
                                                                                                                                                                  t = e
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                            })(),p = (() = > {
                                                                                                                                                              let e,t;
                                                                                                                                                              const n = [],r = [];
                                                                                                                                                              let a = () = > {
                                                                                                                                                              o && console.log("content : detected load "+i),t = !0,e = !0,c.cleanup(),s(r)}
                                                                                                                                                              ;
                                                                                                                                                              var c =  {
                                                                                                                                                                init : () = > {
                                                                                                                                                                  window.addEventListener("DOMContentLoaded",() = > {
                                                                                                                                                                  o && console.log("content : detected DOMContentLoaded "+i),t = !0,s(n)}
                                                                                                                                                                  , {
                                                                                                                                                                    capture : !1,once : !0
                                                                                                                                                                  }
                                                                                                                                                                ),window.addEventListener("load",a,!1)}
                                                                                                                                                                ,registerDomListener : o=> {
                                                                                                                                                                t || e ? o() : n.push(o)}
                                                                                                                                                                ,registerPageListener : t=> {
                                                                                                                                                                e ? t() : r.push(t)}
                                                                                                                                                                ,forcedLoad : () = > {
                                                                                                                                                                e || t || !a || (o && console.log("content : use forced load "+i),a(!0))}
                                                                                                                                                                ,seen : (() = > {
                                                                                                                                                                  const n =  {
                                                                                                                                                                  }
                                                                                                                                                                  ;
                                                                                                                                                                  return Object.defineProperties(n, {
                                                                                                                                                                    load :  {
                                                                                                                                                                      get : () = >e,enumerable : !0
                                                                                                                                                                    }
                                                                                                                                                                    ,DOMContentLoaded :  {
                                                                                                                                                                      get : () = >t,enumerable : !0
                                                                                                                                                                    }
                                                                                                                                                                  }),n
                                                                                                                                                                }
                                                                                                                                                                )(),cleanup : () = > {
                                                                                                                                                                a && (window.removeEventListener("load",a,!1),a = null)}
                                                                                                                                                              };
                                                                                                                                                              return c
                                                                                                                                                            }
                                                                                                                                                            )(),m = t=> {
                                                                                                                                                              let n = r();
                                                                                                                                                              (r = > {
                                                                                                                                                                const s = document.getElementsByTagName("*")[0] || document;
                                                                                                                                                                let i = a("div");
                                                                                                                                                                const c = i.attachShadow( {
                                                                                                                                                                mode : "closed"}
                                                                                                                                                                );
                                                                                                                                                                c.appendChild(a("style"," : host {
                                                                                                                                                                  display : none
                                                                                                                                                                }
                                                                                                                                                                "));
                                                                                                                                                                const l = a("iframe", {
                                                                                                                                                                sandbox : "allow - scripts allow - same - origin",style : "display : none",src : "javascript : void 0"}
                                                                                                                                                                );
                                                                                                                                                                let u = () = > {
                                                                                                                                                                  let s;
                                                                                                                                                                  u = null;
                                                                                                                                                                  try {
                                                                                                                                                                    if(s = l.contentDocument,s) {
                                                                                                                                                                      const e = a("script", {
                                                                                                                                                                        textContent : r
                                                                                                                                                                      }
                                                                                                                                                                      );
                                                                                                                                                                    s.getElementsByTagName("*")[0].appendChild(e)}
                                                                                                                                                                    }catch(e) {
                                                                                                                                                                    }
                                                                                                                                                                    (r = > {
                                                                                                                                                                      const s = "("+e.backup+')(window,document,"'+n+'",'+o+","+e.args.join(",")+");
                                                                                                                                                                      \n",i = a("script", {
                                                                                                                                                                        textContent : s
                                                                                                                                                                      }
                                                                                                                                                                      );
                                                                                                                                                                      r.appendChild(i),p.init(),d.sendToId(n,"commid", {
                                                                                                                                                                        id : t
                                                                                                                                                                      }
                                                                                                                                                                    )}
                                                                                                                                                                  )(i),l.remove(),i.remove()}
                                                                                                                                                                  ;
                                                                                                                                                                  l.addEventListener("load",u, {
                                                                                                                                                                    once : !0
                                                                                                                                                                  }
                                                                                                                                                                ),c.appendChild(l),s.appendChild(i),u && u()}
                                                                                                                                                                )("("+((e,t) = > {
                                                                                                                                                                window.parent[e]=t(window)}
                                                                                                                                                              ).toString()+')("'+n+'",'+e.args[0]+")")}
                                                                                                                                                              ,g = () = > {
                                                                                                                                                              d.send("cleanup")}
                                                                                                                                                              ,f = (() = > {
                                                                                                                                                                const e =  {
                                                                                                                                                                  setInterval : e=> {
                                                                                                                                                                    let t;
                                                                                                                                                                    e.onMessage.addListener(n = > {
                                                                                                                                                                    "setInterval "== n.method && (t = window.setInterval(e.postMessage,n.t))}
                                                                                                                                                                    ),e.onDisconnect.addListener(() = > {
                                                                                                                                                                      t && window.clearInterval(t),t = null
                                                                                                                                                                    }
                                                                                                                                                                  )}
                                                                                                                                                                  ,registerMenuCommand : e=> {
                                                                                                                                                                    const t = n.extension.connect("registerMenuCommand");
                                                                                                                                                                    t.onMessage.addListener(n = > {
                                                                                                                                                                      if(null !== t) {
                                                                                                                                                                        const {
                                                                                                                                                                          method : t,event : o
                                                                                                                                                                        }
                                                                                                                                                                        =n;
                                                                                                                                                                        e.postMessage( {
                                                                                                                                                                          method : t,event : o
                                                                                                                                                                        }
                                                                                                                                                                      )}
                                                                                                                                                                      }),t.onDisconnect.addListener(() = > {
                                                                                                                                                                      e.disconnect()}
                                                                                                                                                                      ),e.onMessage.addListener(e = > {
                                                                                                                                                                        if("register" !== e.method)return;
                                                                                                                                                                        const {
                                                                                                                                                                          name : n,uuid : o,accessKey : r
                                                                                                                                                                        }
                                                                                                                                                                        =e,s = [i,n,o].join("#");
                                                                                                                                                                        t.postMessage( {
                                                                                                                                                                          method : "registerMenuCommand",name : n,uuid : o,menuId : s,accessKey : r
                                                                                                                                                                        }
                                                                                                                                                                      )}
                                                                                                                                                                      ),e.onDisconnect.addListener(() = > {
                                                                                                                                                                      t.disconnect()}
                                                                                                                                                                    )}
                                                                                                                                                                    ,openInTab : e=> {
                                                                                                                                                                      const t = n.extension.connect("openInTab");
                                                                                                                                                                      t.onMessage.addListener(t = > {
                                                                                                                                                                      e.postMessage(t)}
                                                                                                                                                                      ),t.onDisconnect.addListener(() = > {
                                                                                                                                                                      e.disconnect()}
                                                                                                                                                                      ),e.onMessage.addListener(e = > {
                                                                                                                                                                        if("openTab "== e.method) {
                                                                                                                                                                          let n = e.url,o = e.options;
                                                                                                                                                                          "boolean "!= typeof o && void 0 !== o || (o =  {
                                                                                                                                                                            loadInBackground : o
                                                                                                                                                                          }
                                                                                                                                                                          );
                                                                                                                                                                          const r = void 0 === o.active ? void 0 !== o.loadInBackground && !o.loadInBackground : o.active,s = void 0 === o.insert || o.insert;
                                                                                                                                                                          n && 0 === n.search(/^\/\//) && (n = location.protocol+n),t.postMessage( {
                                                                                                                                                                            method : "openInTab",details :  {
                                                                                                                                                                              url : n,options :  {
                                                                                                                                                                                active : !!r,insert : !!s,incognito : !!o.incognito,setParent : !o.incognito && !!o.setParent
                                                                                                                                                                              }
                                                                                                                                                                            },uuid : e.uuid
                                                                                                                                                                          }
                                                                                                                                                                        )}
                                                                                                                                                                        else void 0 !== e.name ? t.postMessage( {
                                                                                                                                                                          name : e.name,uuid : e.uuid
                                                                                                                                                                        }
                                                                                                                                                                        ) : e.focus ? t.postMessage( {
                                                                                                                                                                          focus : !0,uuid : e.uuid
                                                                                                                                                                        }
                                                                                                                                                                        ) : e.close && t.postMessage( {
                                                                                                                                                                          close : !0,uuid : e.uuid
                                                                                                                                                                        }
                                                                                                                                                                      )}
                                                                                                                                                                      ),e.onDisconnect.addListener(() = > {
                                                                                                                                                                      t.disconnect()}
                                                                                                                                                                    )}
                                                                                                                                                                    ,download : e=> {
                                                                                                                                                                      const t = n.extension.connect("download");
                                                                                                                                                                      t.onMessage.addListener(t = > {
                                                                                                                                                                      e.postMessage(t)}
                                                                                                                                                                      ),t.onDisconnect.addListener(() = > {
                                                                                                                                                                      e.disconnect()}
                                                                                                                                                                      ),e.onMessage.addListener(e = > {
                                                                                                                                                                        if(e.cancel)t.postMessage( {
                                                                                                                                                                          cancel : !0,id : i,uuid : e.uuid
                                                                                                                                                                        }
                                                                                                                                                                        );
                                                                                                                                                                        else {
                                                                                                                                                                          const n = e.details;
                                                                                                                                                                          let o = n.url;
                                                                                                                                                                          delete n.url,o && " / " === o[0] && (o = location.origin+o),t.postMessage( {
                                                                                                                                                                            method : "download",details :  {
                                                                                                                                                                              from :  {
                                                                                                                                                                                url : o
                                                                                                                                                                              }
                                                                                                                                                                              ,...n
                                                                                                                                                                            }
                                                                                                                                                                            ,id : i,uuid : e.uuid
                                                                                                                                                                          }
                                                                                                                                                                        )}
                                                                                                                                                                        }),e.onDisconnect.addListener(() = > {
                                                                                                                                                                        t.disconnect()}
                                                                                                                                                                      )}
                                                                                                                                                                      ,webRequest : e=> {
                                                                                                                                                                        const t = n.extension.connect("webRequest");
                                                                                                                                                                        t.onMessage.addListener(t = > {
                                                                                                                                                                        e.postMessage(t)}
                                                                                                                                                                        ),t.onDisconnect.addListener(() = > {
                                                                                                                                                                        e.disconnect()}
                                                                                                                                                                        ),e.onMessage.addListener(e = > {
                                                                                                                                                                          t.postMessage( {
                                                                                                                                                                            method : "webRequest",rules : e.rules,uuid : e.uuid
                                                                                                                                                                          }
                                                                                                                                                                        )}
                                                                                                                                                                        ),e.onDisconnect.addListener(() = > {
                                                                                                                                                                        t.disconnect()}
                                                                                                                                                                      )}
                                                                                                                                                                      ,xhr : e=> {
                                                                                                                                                                        let t,o;
                                                                                                                                                                        const r = [],s = async e = > {
                                                                                                                                                                          if(e && r.push(e),o)await o,s();
                                                                                                                                                                          else {
                                                                                                                                                                            const e = r.shift();
                                                                                                                                                                          e && e()}
                                                                                                                                                                          },a = n.extension.connect("xhr");
                                                                                                                                                                          a.onMessage.addListener(t = > {
                                                                                                                                                                            s(() = > {
                                                                                                                                                                              const {
                                                                                                                                                                                onpartial : n,data : r
                                                                                                                                                                              }
                                                                                                                                                                              =t;
                                                                                                                                                                              if(n && r && r.tfd) {
                                                                                                                                                                                const n = A.fromTransferableData(r.tfd);
                                                                                                                                                                                return delete r.tfd,void(o = new Promise(s = > {
                                                                                                                                                                                  let a;
                                                                                                                                                                                  n.toBlob().then(e = >(a = e.type,e.arrayBuffer ? e.arrayBuffer() : new Response(e).arrayBuffer())).then(i = > {
                                                                                                                                                                                    r.nada =  {
                                                                                                                                                                                      buffer : i,type : a
                                                                                                                                                                                    }
                                                                                                                                                                                  ,e.postMessage(t),o = null,s(),n.dispose()}
                                                                                                                                                                                ).catch(e = >console.warn(e))}
                                                                                                                                                                              ))}
                                                                                                                                                                            e.postMessage(t)}
                                                                                                                                                                          )}
                                                                                                                                                                          ),a.onDisconnect.addListener(() = > {
                                                                                                                                                                            s(async() = > {
                                                                                                                                                                            e.disconnect()}
                                                                                                                                                                          )}
                                                                                                                                                                          ),e.onMessage.addListener(e = > {
                                                                                                                                                                          t = t || e.details,a.postMessage(e)}
                                                                                                                                                                          ),e.onDisconnect.addListener(() = > {
                                                                                                                                                                          a.disconnect()}
                                                                                                                                                                        )}
                                                                                                                                                                        ,onurlchange : e=> {
                                                                                                                                                                          const t = n.extension.connect("onurlchange");
                                                                                                                                                                          let o = () = > {
                                                                                                                                                                            e.postMessage( {
                                                                                                                                                                              url : document.location.href
                                                                                                                                                                            }
                                                                                                                                                                          )}
                                                                                                                                                                          ;
                                                                                                                                                                          const r = () = > {
                                                                                                                                                                          o && (window.removeEventListener("hashchange",o),o = null)}
                                                                                                                                                                          ;
                                                                                                                                                                          window.addEventListener("hashchange",o),t.onMessage.addListener(t = > {
                                                                                                                                                                          e.postMessage(t)}
                                                                                                                                                                          ),t.onDisconnect.addListener(() = > {
                                                                                                                                                                          e.disconnect(),r()}
                                                                                                                                                                          ),e.onMessage.addListener(e = > {
                                                                                                                                                                          t.postMessage(e)}
                                                                                                                                                                          ),e.onDisconnect.addListener(() = > {
                                                                                                                                                                          t.disconnect(),r()}
                                                                                                                                                                        )}
                                                                                                                                                                        ,values : e=> {
                                                                                                                                                                          const t = n.extension.connect("values");
                                                                                                                                                                          t.onMessage.addListener(t = > {
                                                                                                                                                                          e.postMessage(t)}
                                                                                                                                                                          ),t.onDisconnect.addListener(() = > {
                                                                                                                                                                          e.disconnect()}
                                                                                                                                                                          ),e.onMessage.addListener(e = > {
                                                                                                                                                                          t.postMessage(e)}
                                                                                                                                                                          ),e.onDisconnect.addListener(() = > {
                                                                                                                                                                          t.disconnect()}
                                                                                                                                                                        )}
                                                                                                                                                                        },t =  {
                                                                                                                                                                          setTimeout : ( {
                                                                                                                                                                            args : e,cb : t
                                                                                                                                                                          }
                                                                                                                                                                          ) = > {
                                                                                                                                                                          window.setTimeout(t,e.t)}
                                                                                                                                                                          ,setClipboard : ( {
                                                                                                                                                                            args : e,cb : t
                                                                                                                                                                          }
                                                                                                                                                                          ) = > {
                                                                                                                                                                            const o = e.content,r = e.info,s = typeof r;
                                                                                                                                                                            let a,i;
                                                                                                                                                                            "object" === s ? (r.type && (a = r.type),r.mimetype && (i = r.mimetype)) : "string" === s && (a = r);
                                                                                                                                                                            const c = i || ("html "== a ? "text / html" : "text / plain");
                                                                                                                                                                            n.FEATURES.RUNTIME.CLIPBOARD_API ? n.extension.sendMessage( {
                                                                                                                                                                              method : "clipboard",mimetype : c,content : o
                                                                                                                                                                            }
                                                                                                                                                                            ,() = >t()) : (document.addEventListener("copy",e = > {
                                                                                                                                                                            e.stopImmediatePropagation(),e.preventDefault(),e.clipboardData.setData(c,o)}
                                                                                                                                                                            , {
                                                                                                                                                                              capture : !0,once : !0
                                                                                                                                                                            }
                                                                                                                                                                          ),document.execCommand("copy"),t())}
                                                                                                                                                                          ,notification : ( {
                                                                                                                                                                            args : e,cb : t
                                                                                                                                                                          }
                                                                                                                                                                          ) = > {
                                                                                                                                                                          e.method = "notification",n.extension.sendMessage(e,t)}
                                                                                                                                                                          ,syntaxCheck : ( {
                                                                                                                                                                            args : e,cb : t
                                                                                                                                                                          }
                                                                                                                                                                          ) = > {
                                                                                                                                                                          e.method = "syntaxCheck",n.extension.sendMessage(e,t)}
                                                                                                                                                                          ,closeTab : ( {
                                                                                                                                                                            args :  {
                                                                                                                                                                              uuid : e
                                                                                                                                                                            }
                                                                                                                                                                            ,cb : t
                                                                                                                                                                          }
                                                                                                                                                                          ) = > {
                                                                                                                                                                            n.extension.sendMessage( {
                                                                                                                                                                              method : "closeTab",uuid : e,id : i
                                                                                                                                                                            }
                                                                                                                                                                            ,e = > {
                                                                                                                                                                            e.error && console.warn(e.error),t()}
                                                                                                                                                                          )}
                                                                                                                                                                          ,focusTab : ( {
                                                                                                                                                                            args :  {
                                                                                                                                                                              uuid : e
                                                                                                                                                                            }
                                                                                                                                                                            ,cb : t
                                                                                                                                                                          }
                                                                                                                                                                          ) = > {
                                                                                                                                                                            n.extension.sendMessage( {
                                                                                                                                                                              method : "focusTab",uuid : e,id : i
                                                                                                                                                                            }
                                                                                                                                                                            ,e = > {
                                                                                                                                                                            e.error && console.warn(e.error),t()}
                                                                                                                                                                          )}
                                                                                                                                                                          ,addElement : async( {
                                                                                                                                                                            args : e,node : t,cb : n
                                                                                                                                                                          }
                                                                                                                                                                          ) = > {
                                                                                                                                                                            try {
                                                                                                                                                                              const o = a(e.tag, {
                                                                                                                                                                                ...e.properties ||  {
                                                                                                                                                                                }
                                                                                                                                                                                ,...e.id ?  {
                                                                                                                                                                                  id : e.id
                                                                                                                                                                                }
                                                                                                                                                                                : {
                                                                                                                                                                                }
                                                                                                                                                                              });
                                                                                                                                                                              let r;
                                                                                                                                                                            t ? r=t : (r = document.head || document.body || document.documentElement,r || (r = await new Promise(e = >p.registerDomListener(() = >e(document.head || document.body))))),r.appendChild(o),n()}
                                                                                                                                                                            catch(e) {
                                                                                                                                                                            console.warn("content : error adding script",e)}
                                                                                                                                                                            },tabs : ( {
                                                                                                                                                                              args : e,cb : t
                                                                                                                                                                            }
                                                                                                                                                                            ) = > {
                                                                                                                                                                              e.method = "tabs",n.extension.sendMessage(e,e = > {
                                                                                                                                                                              t(e.data)}
                                                                                                                                                                            )}
                                                                                                                                                                            ,cookie : ( {
                                                                                                                                                                              args : e,cb : t
                                                                                                                                                                            }
                                                                                                                                                                            ) = > {
                                                                                                                                                                              e.method = "cookie",n.extension.sendMessage(e,e = > {
                                                                                                                                                                              t(e.data)}
                                                                                                                                                                            )}
                                                                                                                                                                          };
                                                                                                                                                                          return {
                                                                                                                                                                            init : () = > {
                                                                                                                                                                            }
                                                                                                                                                                            ,processMessage : ( {
                                                                                                                                                                              method : e,args : n,node : o,sendResponse : r
                                                                                                                                                                            }
                                                                                                                                                                            ) = > {
                                                                                                                                                                              let s;
                                                                                                                                                                              if(s = t[e])return s( {
                                                                                                                                                                                args : n,node : o,cb : r
                                                                                                                                                                              }
                                                                                                                                                                              );
                                                                                                                                                                            r()}
                                                                                                                                                                            ,processConnect : (t,n) = > {
                                                                                                                                                                              let o;
                                                                                                                                                                            if(o = e[t])return o(n)}
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                        )();
                                                                                                                                                                        (n.FEATURES.RUNTIME.FIREFOX ? new Promise(e = >p.registerDomListener(() = >e(document.body))) : Promise.resolve(document)).then(e = > {
                                                                                                                                                                          e.addEventListener("mouseenter",() = > {
                                                                                                                                                                            n.extension.sendMessage( {
                                                                                                                                                                              method : "contextmenu",url : window.location.href,id : i
                                                                                                                                                                            }
                                                                                                                                                                          )}
                                                                                                                                                                        ,!1)}
                                                                                                                                                                        ),n.extension.onMessage.addListener((e,t,n) = > {
                                                                                                                                                                          if(e.id && e.i d!= i)console.warn("content : Not for me! "+i.substr(0,10)+ "!= "+e.id);
                                                                                                                                                                          else if("executeScript "== e.method)e.url && 0 !== window.location.href.indexOf(e.url) ? o && console.log("exec : URL doesn't match",window.location,e) : void 0 !== e.topframe && e.topfram e!= c ? o && console.log("exec : topframe doesn't match",window.self,e) : d.send("executeScript",e),n( {
                                                                                                                                                                          }
                                                                                                                                                                          );
                                                                                                                                                                          else if("onLoad "== e.method)document.readyState && "complete" !== document.readyState || p.forcedLoad(),n( {
                                                                                                                                                                          }
                                                                                                                                                                          );
                                                                                                                                                                          else if(c)if("loadUrl "== e.method)window.location = e.url,n( {
                                                                                                                                                                          }
                                                                                                                                                                          );
                                                                                                                                                                          else if("reload "== e.method)window.location.reload(),n( {
                                                                                                                                                                          }
                                                                                                                                                                          );
                                                                                                                                                                          else {
                                                                                                                                                                            if("confirm "== e.method)return window.setTimeout(() = > {
                                                                                                                                                                              const t = window.confirm(e.msg);
                                                                                                                                                                              n( {
                                                                                                                                                                                confirm : t
                                                                                                                                                                              }
                                                                                                                                                                            )}
                                                                                                                                                                            ,100),!0;
                                                                                                                                                                            if("showMsg "== e.method)return window.setTimeout(() = > {
                                                                                                                                                                              window.setTimeout(() = > {
                                                                                                                                                                              window.alert(e.msg)}
                                                                                                                                                                              ,1),n( {
                                                                                                                                                                              }
                                                                                                                                                                            )}
                                                                                                                                                                            ,100),!0;
                                                                                                                                                                            "setForeignAttr "== e.method ? (d.send(e.method,e),n( {
                                                                                                                                                                            }
                                                                                                                                                                          )) : window.console.log("content : unknown method "+e.method)}
                                                                                                                                                                          }),u.onConnect.addListener((e,t) = > {
                                                                                                                                                                          f.processConnect(e,t)}
                                                                                                                                                                          ),d.onMessage.addListener(e = > {
                                                                                                                                                                            const {
                                                                                                                                                                              method : t,args : o,sendResponse : r
                                                                                                                                                                            }
                                                                                                                                                                            =e;
                                                                                                                                                                            if("document.write "== t) {
                                                                                                                                                                              const e = document.documentElement;
                                                                                                                                                                              Promise.resolve().then(() = > {
                                                                                                                                                                              e !== document.documentElement && d.init()}
                                                                                                                                                                            )}
                                                                                                                                                                            else"port.message "== t ? u.message(o) : "csp "== t ? n.page.eval('window["'+o.id+'"]=function() {
                                                                                                                                                                            '+o.src+"}
                                                                                                                                                                            ;
                                                                                                                                                                            \n") : "external.message "== t ? n.extension.sendMessage( {
                                                                                                                                                                              method : "externalMessage",request : o
                                                                                                                                                                            }
                                                                                                                                                                            ,e = > {
                                                                                                                                                                            r(e)}
                                                                                                                                                                          ) : f.processMessage(e)}
                                                                                                                                                                          );
                                                                                                                                                                          let _ = !1;
                                                                                                                                                                          const v = (e,t,r) = > {
                                                                                                                                                                            let s = 1;
                                                                                                                                                                            const a = () = > {
                                                                                                                                                                              o && console.debug('content : send "prepare" message'),n.extension.sendMessage( {
                                                                                                                                                                                method : "prepare",id : i,topframe : c,url : window.location.href
                                                                                                                                                                              }
                                                                                                                                                                              ,n = > {
                                                                                                                                                                                if(!_) {
                                                                                                                                                                                  if(!n)return o && console.debug("content : _early_ execution,connection to bg failed - > retry!"),window.setTimeout(a,s),void(s*=2);
                                                                                                                                                                                _ = !0,n.contexters || n.scripts && n.scripts.length || n.external_connect ? (r && r(),t(n)) : (g(),e())}
                                                                                                                                                                              })}
                                                                                                                                                                              ;
                                                                                                                                                                            n.content.onReady(a)}
                                                                                                                                                                            ,h = location.pathname+location.search,b = "TM_"+n.runtime.short_id+window.btoa(h.length+h).substr(0,255).replace(/[#=\/]/g,"_"),y = document.contentType && "text / html "!= document.contentType;
                                                                                                                                                                            var w,M,E;
                                                                                                                                                                            w = (e,r) = > {
                                                                                                                                                                              let s;
                                                                                                                                                                              o && console.log("content : Started ("+i+","+window.location.origin+window.location.pathname+")",t.tm_info),n.FEATURES.RUNTIME.FAST_EXEC_SUPPORT && (s = (() = > {
                                                                                                                                                                                let e,t,n,o;
                                                                                                                                                                                try {
                                                                                                                                                                                  o = document.cookie.split(";
                                                                                                                                                                                ")}
                                                                                                                                                                                catch(e) {
                                                                                                                                                                                  return
                                                                                                                                                                                }
                                                                                                                                                                                for(e = 0;
                                                                                                                                                                                e<o.length;
                                                                                                                                                                                e++)if(t = o[e].substr(0,o[e].indexOf(" = ")),n = o[e].substr(o[e].indexOf(" = ")+1),t = t.replace(/^\s+|\s+$/g,""),0 === t.indexOf(b)) {
                                                                                                                                                                                  document.cookie = t+" = ;
                                                                                                                                                                                  expires = Thu,01 Jan 1970 00 : 00 : 01 GMT;
                                                                                                                                                                                  ";
                                                                                                                                                                                  const e = window.decodeURIComponent(n);
                                                                                                                                                                                  if(0 !== e.indexOf("blob : "))continue;
                                                                                                                                                                                  const o = new XMLHttpRequest;
                                                                                                                                                                                  try {
                                                                                                                                                                                  if(o.open("GET",e,!1),o.send(null),200 === o.status || 0 === o.status)return JSON.parse(o.responseText)}
                                                                                                                                                                                  catch(e) {
                                                                                                                                                                                  console.warn("content : unable to decode "+(o.responseText || "unknown"))}
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                              )()) || (s = t.tm_info) ? (delete t.tm_info,s.contexters || s.scripts && s.scripts.length || s.external_connect ? (m(i),d.init(i),r(s,"sync")) : e(),n.FEATURES.RUNTIME.FAST_EXEC_SUPPORT && n.extension.sendMessage( {
                                                                                                                                                                                method : "prepare",url : window.location.href,cleanup : !0
                                                                                                                                                                              }
                                                                                                                                                                              ,() = > {
                                                                                                                                                                              }
                                                                                                                                                                              )) : y?v(e,r,() = > {
                                                                                                                                                                              m(i),d.init(i)}
                                                                                                                                                                            ) : (m(i),d.init(i),v(e,r))}
                                                                                                                                                                            ,M = () = > {
                                                                                                                                                                            o && console.log("content : disable event processing for "+i),p.cleanup(),g(),d.cleanup()}
                                                                                                                                                                            ,E = (t,r) = > {
                                                                                                                                                                              l = t.logLevel,o|=l>=60,p.registerDomListener(() = > {
                                                                                                                                                                              d.send("DOMContentLoaded")}
                                                                                                                                                                              ),p.registerPageListener(() = > {
                                                                                                                                                                              d.send("load")}
                                                                                                                                                                              ),o && console.log("content : "+(r || "normal")+" start event processing for "+i+" ("+t.scripts.length+" to run)"),f.init(t.scripts),(t = > {
                                                                                                                                                                                const r =  {
                                                                                                                                                                                  short_id : n.runtime.short_id
                                                                                                                                                                                }
                                                                                                                                                                                ;
                                                                                                                                                                                ["inIncognitoContext","isFirstPartyIsolation","downloadMode","enforce_strict_mode","top_level_await","measure_scripts","version","external_connect"].forEach(e = > {
                                                                                                                                                                                r[e]=t[e]}
                                                                                                                                                                                ),r.sandbox_allow_getters = !0,r.detect_constructors_by_keys = n.FEATURES.RUNTIME.DETECT_CONSTRUCTORS_BY_KEYS,r.blob_download_supported = !n.FEATURES.RUNTIME.FIREFOX,o && (p.seen.load ? console.log("content : Start ENV with page loaded "+i) : p.seen.DOMContentLoaded ? console.log("content : Start ENV with DOMContentLoaded "+i) : console.log("content : Start ENV normally "+i));
                                                                                                                                                                                const s = e.next(i,JSON.stringify(t.scripts),JSON.stringify(r),JSON.stringify( {
                                                                                                                                                                                }
                                                                                                                                                                                ),JSON.stringify(P),l,void 0,void 0,void 0,void 0,o,p.seen.load,p.seen.DOMContentLoaded,e.environment);
                                                                                                                                                                                d.send("next", {
                                                                                                                                                                                  src : s
                                                                                                                                                                                }
                                                                                                                                                                              )}
                                                                                                                                                                              )(t),c || window.addEventListener("unload",() = > {
                                                                                                                                                                                n.extension.sendMessage( {
                                                                                                                                                                                  method : "unLoad",id : i,topframe : !1,url : window.location.href
                                                                                                                                                                                }
                                                                                                                                                                                ,() = > {
                                                                                                                                                                                }
                                                                                                                                                                              ),p.cleanup(),g(),d.cleanup()}
                                                                                                                                                                            ,!1)}
                                                                                                                                                                            ,y ? window.setTimeout(() = > {
                                                                                                                                                                            w(M,E)}
                                                                                                                                                                          ,1) : w(M,E)}
                                                                                                                                                                          ;
                                                                                                                                                                          (async() = > {
                                                                                                                                                                            const e = window.rea;
                                                                                                                                                                          void 0 === e.globals._content && (e.globals._content = !0,I(window))}
                                                                                                                                                                        )()}
                                                                                                                                                                        )();
