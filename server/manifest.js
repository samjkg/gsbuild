const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","favicons.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CwMlLBRJ.js","app":"_app/immutable/entry/app.COdOixRc.js","imports":["_app/immutable/entry/start.CwMlLBRJ.js","_app/immutable/chunks/entry.DJ3FhioW.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/entry/app.COdOixRc.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.BKH2UFYu.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-DHik_iSd.js')),
			__memo(() => import('./chunks/1-CZIBgfV6.js')),
			__memo(() => import('./chunks/2-5puWbcba.js')),
			__memo(() => import('./chunks/3-IcsbyArP.js')),
			__memo(() => import('./chunks/4-DR0PT1zm.js')),
			__memo(() => import('./chunks/5-DBdgQK3X.js')),
			__memo(() => import('./chunks/6-KBHYiJKP.js')),
			__memo(() => import('./chunks/7-C_BjEEnr.js')),
			__memo(() => import('./chunks/8-D2DgkUyy.js')),
			__memo(() => import('./chunks/9-Buq-fUT8.js')),
			__memo(() => import('./chunks/10-Hpu4EwBC.js')),
			__memo(() => import('./chunks/11-o0x3-DU9.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/accueil",
				pattern: /^\/accueil\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/accueil/ilsnousfontconfiance",
				pattern: /^\/accueil\/ilsnousfontconfiance\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/accueil/nosservices",
				pattern: /^\/accueil\/nosservices\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/accueil/notremission",
				pattern: /^\/accueil\/notremission\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/services",
				pattern: /^\/services\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/services/offremoyennegrande",
				pattern: /^\/services\/offremoyennegrande\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/services/offrestartup",
				pattern: /^\/services\/offrestartup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/services/servicealademande",
				pattern: /^\/services\/servicealademande\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
