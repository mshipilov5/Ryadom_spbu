(()=>{"use strict";module.exports = [
"[project]/src/modules/education/components/CatalogClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CatalogClient",
    ()=>CatalogClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$education$2f$mock$2f$materials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/education/mock/materials.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$education$2f$lib$2f$filterMaterials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/education/lib/filterMaterials.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$education$2f$components$2f$CatalogFilters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/education/components/CatalogFilters.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$education$2f$components$2f$MaterialCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/education/components/MaterialCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$education$2f$components$2f$CatalogStates$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/education/components/CatalogStates.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const initial = {
    q: '',
    category: null,
    tags: [],
    type: 'article'
};
function CatalogClient() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initial);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const state = params.get('state');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (state === 'loading') {
            setLoading(true);
            return;
        }
        setLoading(true);
        const timer = window.setTimeout(()=>setLoading(false), 650);
        return ()=>window.clearTimeout(timer);
    }, [
        state
    ]);
    const sourceMaterials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (state !== 'many') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$education$2f$mock$2f$materials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["psychoeducationMaterials"];
        }
        return Array.from({
            length: 5
        }, ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$education$2f$mock$2f$materials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["psychoeducationMaterials"]).flat();
    }, [
        state
    ]);
    const materials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$education$2f$lib$2f$filterMaterials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterMaterials"])(sourceMaterials, filters), [
        sourceMaterials,
        filters
    ]);
    const reset = ()=>setFilters(initial);
    const visibleMaterials = state === 'empty' ? [] : materials;
    const hasError = state === 'error';
    const retry = ()=>{
        router.replace('/psychoeducation');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$education$2f$components$2f$CatalogFilters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CatalogFilters"], {
                filters: filters,
                options: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$education$2f$mock$2f$materials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["psychoeducationFilterOptions"],
                onChange: setFilters,
                onReset: reset
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/CatalogClient.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "catalogResultMeta",
                "aria-live": "polite",
                children: !loading && !hasError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: visibleMaterials.length === 1 ? 'Найден 1 материал' : `Найдено материалов: ${visibleMaterials.length}`
                }, void 0, false, {
                    fileName: "[project]/src/modules/education/components/CatalogClient.tsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/CatalogClient.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$education$2f$components$2f$CatalogStates$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CatalogLoading"], {}, void 0, false, {
                fileName: "[project]/src/modules/education/components/CatalogClient.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this) : hasError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$education$2f$components$2f$CatalogStates$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CatalogError"], {
                onRetry: retry
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/CatalogClient.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this) : visibleMaterials.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$education$2f$components$2f$CatalogStates$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CatalogEmpty"], {
                onReset: reset
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/CatalogClient.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "materialsGrid",
                children: visibleMaterials.map((material, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$education$2f$components$2f$MaterialCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialCard"], {
                        material: material
                    }, `${material.slug}-${index}`, false, {
                        fileName: "[project]/src/modules/education/components/CatalogClient.tsx",
                        lineNumber: 86,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/CatalogClient.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/education/components/CatalogClient.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/modules/education/components/CatalogFilters.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CatalogFilters",
    ()=>CatalogFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$education$2f$lib$2f$contentType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/education/lib/contentType.ts [app-ssr] (ecmascript)");
;
;
function CatalogFilters({ filters, options, onChange, onReset }) {
    const toggleTag = (slug)=>{
        onChange({
            ...filters,
            tags: filters.tags.includes(slug) ? filters.tags.filter((tag)=>tag !== slug) : [
                ...filters.tags,
                slug
            ]
        });
    };
    const active = Boolean(filters.q.trim()) || Boolean(filters.category) || filters.tags.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "catalogControls",
        "aria-label": "Поиск и фильтры психопросвета",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "searchField",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "searchIcon",
                        "aria-hidden": "true",
                        children: "⌕"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/education/components/CatalogFilters.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "srOnly",
                        children: "Поиск по материалам"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/education/components/CatalogFilters.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "search",
                        maxLength: 100,
                        value: filters.q,
                        placeholder: "Поиск по темам, практикам и состояниям",
                        onChange: (event)=>onChange({
                                ...filters,
                                q: event.target.value
                            })
                    }, void 0, false, {
                        fileName: "[project]/src/modules/education/components/CatalogFilters.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/education/components/CatalogFilters.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "filterGroup",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "filterLabel",
                        children: "Тип материала"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/education/components/CatalogFilters.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "filterScroller",
                        children: options.types.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `filterChip ${filters.type === type ? 'isSelected' : ''}`,
                                "aria-pressed": filters.type === type,
                                onClick: ()=>onChange({
                                        ...filters,
                                        type
                                    }),
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$education$2f$lib$2f$contentType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contentTypeFilterLabels"][type]
                            }, type, false, {
                                fileName: "[project]/src/modules/education/components/CatalogFilters.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/education/components/CatalogFilters.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/education/components/CatalogFilters.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "filterGroup",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "filterLabel",
                        children: "Раздел"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/education/components/CatalogFilters.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "filterScroller",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `filterChip ${filters.category === null ? 'isSelected' : ''}`,
                                "aria-pressed": filters.category === null,
                                onClick: ()=>onChange({
                                        ...filters,
                                        category: null
                                    }),
                                children: "Все"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/education/components/CatalogFilters.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            options.categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `filterChip ${filters.category === category.slug ? 'isSelected' : ''}`,
                                    "aria-pressed": filters.category === category.slug,
                                    onClick: ()=>onChange({
                                            ...filters,
                                            category: category.slug
                                        }),
                                    children: category.name
                                }, category.slug, false, {
                                    fileName: "[project]/src/modules/education/components/CatalogFilters.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/education/components/CatalogFilters.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/education/components/CatalogFilters.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "filterGroup",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "filterLabel",
                        children: "Теги"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/education/components/CatalogFilters.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "filterScroller",
                        children: options.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                title: tag.name,
                                "aria-pressed": filters.tags.includes(tag.slug),
                                className: `filterChip ${filters.tags.includes(tag.slug) ? 'isSelected' : ''}`,
                                onClick: ()=>toggleTag(tag.slug),
                                children: tag.name
                            }, tag.slug, false, {
                                fileName: "[project]/src/modules/education/components/CatalogFilters.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/education/components/CatalogFilters.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/education/components/CatalogFilters.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "resetButton",
                type: "button",
                onClick: onReset,
                children: "Сбросить фильтры"
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/CatalogFilters.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/education/components/CatalogFilters.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/modules/education/components/CatalogStates.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CatalogEmpty",
    ()=>CatalogEmpty,
    "CatalogError",
    ()=>CatalogError,
    "CatalogLoading",
    ()=>CatalogLoading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function CatalogLoading() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-busy": "true",
        "aria-live": "polite",
        "aria-label": "Загрузка материалов",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "stateAnnounce",
                children: "Загружаем материалы…"
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/CatalogStates.tsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "materialsGrid",
                children: Array.from({
                    length: 6
                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "materialCard skeletonCard",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "skeleton skeletonCover"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/education/components/CatalogStates.tsx",
                                lineNumber: 8,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "materialCardBody",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "skeleton line short"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/education/components/CatalogStates.tsx",
                                        lineNumber: 10,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "skeleton line"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/education/components/CatalogStates.tsx",
                                        lineNumber: 11,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "skeleton line"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/education/components/CatalogStates.tsx",
                                        lineNumber: 12,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "skeleton line medium"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/education/components/CatalogStates.tsx",
                                        lineNumber: 13,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/education/components/CatalogStates.tsx",
                                lineNumber: 9,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/modules/education/components/CatalogStates.tsx",
                        lineNumber: 7,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/CatalogStates.tsx",
                lineNumber: 5,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/education/components/CatalogStates.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
function CatalogEmpty({ onReset }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "stateCard",
        "aria-live": "polite",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stateSymbol",
                "aria-hidden": "true",
                children: "⌕"
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/CatalogStates.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "По вашему запросу ничего не найдено"
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/CatalogStates.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Попробуйте изменить запрос или убрать часть фильтров."
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/CatalogStates.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onReset,
                children: "Сбросить фильтры"
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/CatalogStates.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/education/components/CatalogStates.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
function CatalogError({ onRetry }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "stateCard isError",
        role: "alert",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stateSymbol",
                "aria-hidden": "true",
                children: "!"
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/CatalogStates.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Не удалось загрузить материалы"
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/CatalogStates.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Проверьте соединение и попробуйте ещё раз."
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/CatalogStates.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onRetry,
                children: "Повторить"
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/CatalogStates.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/education/components/CatalogStates.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/modules/education/components/MaterialCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MaterialCard",
    ()=>MaterialCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$education$2f$lib$2f$contentType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/education/lib/contentType.ts [app-ssr] (ecmascript)");
;
;
;
function formatReviewedAt(value) {
    return new Intl.DateTimeFormat('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).format(new Date(value));
}
function MaterialCard({ material }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "materialCard",
        href: `/psychoeducation/${material.slug}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `materialCover ${material.imageUrl ? '' : 'isPlaceholder'}`,
                children: material.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: material.imageUrl,
                    alt: `Обложка материала «${material.title}»`
                }, void 0, false, {
                    fileName: "[project]/src/modules/education/components/MaterialCard.tsx",
                    lineNumber: 18,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "coverPlaceholder",
                    role: "img",
                    "aria-label": "У материала нет обложки",
                    children: "Психопросвет"
                }, void 0, false, {
                    fileName: "[project]/src/modules/education/components/MaterialCard.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/MaterialCard.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "materialCardBody",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "materialMeta",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$education$2f$lib$2f$contentType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contentTypeLabels"][material.type]
                            }, void 0, false, {
                                fileName: "[project]/src/modules/education/components/MaterialCard.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/education/components/MaterialCard.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    material.durationMinutes,
                                    " мин"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/education/components/MaterialCard.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/education/components/MaterialCard.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: material.title
                    }, void 0, false, {
                        fileName: "[project]/src/modules/education/components/MaterialCard.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "materialSummary",
                        children: material.summary
                    }, void 0, false, {
                        fileName: "[project]/src/modules/education/components/MaterialCard.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tagList",
                        "aria-label": "Теги материала",
                        children: material.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "tag",
                                title: tag.name,
                                children: tag.name
                            }, tag.slug, false, {
                                fileName: "[project]/src/modules/education/components/MaterialCard.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/education/components/MaterialCard.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cardReviewMeta",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Автор: ",
                                    material.author
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/education/components/MaterialCard.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Рецензент: ",
                                    material.reviewer
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/education/components/MaterialCard.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Пересмотрено: ",
                                    formatReviewedAt(material.reviewedAt)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/education/components/MaterialCard.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/education/components/MaterialCard.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/education/components/MaterialCard.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/education/components/MaterialCard.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/modules/education/lib/contentType.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contentTypeFilterLabels",
    ()=>contentTypeFilterLabels,
    "contentTypeLabels",
    ()=>contentTypeLabels
]);
const contentTypeLabels = {
    article: 'Статья'
};
const contentTypeFilterLabels = {
    article: 'Статьи'
};
}),
"[project]/src/modules/education/lib/filterMaterials.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterMaterials",
    ()=>filterMaterials
]);
function filterMaterials(materials, filters) {
    const q = filters.q.trim().toLocaleLowerCase('ru-RU');
    return materials.filter((material)=>{
        if (filters.type && material.type !== filters.type) return false;
        if (filters.category && material.category.slug !== filters.category) return false;
        if (filters.tags.length && !filters.tags.every((tag)=>material.tags.some((x)=>x.slug === tag))) return false;
        if (!q) return true;
        return `${material.title} ${material.summary}`.toLocaleLowerCase('ru-RU').includes(q);
    });
}
}),
"[project]/src/modules/education/mock/materials.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "psychoeducationFilterOptions",
    ()=>psychoeducationFilterOptions,
    "psychoeducationMaterials",
    ()=>psychoeducationMaterials
]);
const editorialMeta = {
    author: 'Редакция «Рядом»',
    reviewer: 'Клинический рецензент СПбГУ'
};
const psychoeducationMaterials = [
    {
        slug: 'exam-stress',
        title: 'Как пережить экзаменационный стресс и не выгореть в конце семестра',
        summary: 'Что происходит с вниманием во время сильного напряжения и какие небольшие действия помогают вернуть ощущение контроля.',
        imageUrl: '/psychoeducation/exam-stress.svg',
        category: {
            slug: 'study',
            name: 'Учёба'
        },
        tags: [
            {
                slug: 'stress',
                name: 'Стресс'
            },
            {
                slug: 'exams',
                name: 'Экзамены'
            }
        ],
        type: 'article',
        durationMinutes: 6,
        contentWarning: null,
        ...editorialMeta,
        reviewedAt: '2026-10-23T00:00:00Z',
        safeNextStep: 'Выберите одну небольшую учебную задачу на ближайшие 15 минут.',
        body: `Экзаменационный стресс — нормальная реакция на высокую нагрузку. Он может влиять на внимание, память и ощущение контроля.

## Что можно сделать прямо сейчас

- остановиться на минуту и проверить, насколько вы устали;
- выбрать **одну** небольшую задачу вместо попытки охватить всё;
- запланировать короткий перерыв после неё;
- сохранить базовый режим сна, еды и движения.

## Когда стоит обратиться за поддержкой

Если тревога долго мешает спать, учиться или выполнять обычные дела, не обязательно справляться в одиночку. Можно перейти в [раздел помощи](/crisis) и посмотреть доступные варианты.

> Этот материал не заменяет консультацию специалиста и не является диагностикой.`,
        sources: [
            {
                title: 'Всемирная организация здравоохранения — управление стрессом',
                url: 'https://www.who.int/'
            }
        ]
    },
    {
        slug: 'sleep-reset',
        title: 'Если сбился сон: мягко возвращаем режим',
        summary: 'Несколько шагов, которые помогают постепенно восстановить более стабильный режим сна.',
        imageUrl: '/psychoeducation/sleep.svg',
        category: {
            slug: 'wellbeing',
            name: 'Самочувствие'
        },
        tags: [
            {
                slug: 'sleep',
                name: 'Сон'
            },
            {
                slug: 'fatigue',
                name: 'Усталость'
            }
        ],
        type: 'article',
        durationMinutes: 5,
        contentWarning: null,
        ...editorialMeta,
        reviewedAt: '2026-10-21T00:00:00Z',
        safeNextStep: 'Выберите реалистичное время подъёма на завтра и постарайтесь сохранить его несколько дней.',
        body: `Сон редко удаётся «починить» одной идеальной ночью.

## Мягкий возврат к режиму

1. Стабилизируйте время подъёма.
2. Днём добавьте немного естественного света и движения.
3. За час до сна уменьшите количество сложных задач.

Если нарушения сна сохраняются долго или сильно влияют на самочувствие, лучше обсудить это со специалистом.`,
        sources: []
    },
    {
        slug: 'anxiety-grounding',
        title: 'Когда тревога накрывает: возвращаем внимание в настоящее',
        summary: 'Короткая текстовая практика, которая помогает переключить внимание с тревожных мыслей на происходящее вокруг.',
        imageUrl: null,
        category: {
            slug: 'emotional-state',
            name: 'Эмоциональное состояние'
        },
        tags: [
            {
                slug: 'anxiety',
                name: 'Тревога'
            },
            {
                slug: 'self-help',
                name: 'Самопомощь'
            }
        ],
        type: 'article',
        durationMinutes: 4,
        contentWarning: 'Материал описывает сильную тревогу. Вы можете в любой момент закрыть страницу и перейти в раздел помощи.',
        ...editorialMeta,
        reviewedAt: '2026-10-20T00:00:00Z',
        safeNextStep: 'Назовите пять предметов вокруг и почувствуйте опору под ногами или спиной.',
        body: `## Практика «5–4–3–2–1»

Оглянитесь и назовите:

- **5** вещей, которые видите;
- **4** телесных ощущения;
- **3** звука;
- **2** запаха;
- **1** вкус или ощущение во рту.

Задача практики — не «убрать» тревогу любой ценой, а ненадолго вернуть внимание к настоящему моменту.`,
        sources: []
    },
    {
        slug: 'burnout-signs',
        title: 'Усталость или выгорание: на какие сигналы стоит обратить внимание',
        summary: 'Чем обычная усталость может отличаться от устойчивого истощения и почему восстановление — это не только отдых на выходных.',
        imageUrl: '/psychoeducation/burnout.svg',
        category: {
            slug: 'wellbeing',
            name: 'Самочувствие'
        },
        tags: [
            {
                slug: 'fatigue',
                name: 'Усталость'
            },
            {
                slug: 'burnout',
                name: 'Выгорание'
            },
            {
                slug: 'long-tag',
                name: 'Очень длинный тег для проверки устойчивости интерфейса на мобильных экранах'
            }
        ],
        type: 'article',
        durationMinutes: 8,
        contentWarning: null,
        ...editorialMeta,
        reviewedAt: '2026-10-18T00:00:00Z',
        safeNextStep: 'Отметьте одну нагрузку, которую можно уменьшить или перенести на этой неделе.',
        body: `Обычная усталость чаще уменьшается после отдыха. При устойчивом истощении привычные задачи могут требовать заметно больше усилий.

## На что смотреть

- как меняется энергия в течение нескольких недель;
- помогает ли отдых;
- насколько трудно начинать обычные задачи;
- изменились ли сон и концентрация.

Один симптом сам по себе не является диагнозом.`,
        sources: []
    },
    {
        slug: 'self-esteem',
        title: 'Самооценка без постоянного сравнения с другими',
        summary: 'Как замечать автоматические сравнения и возвращаться к более реалистичной оценке собственных результатов.',
        imageUrl: null,
        category: {
            slug: 'emotional-state',
            name: 'Эмоциональное состояние'
        },
        tags: [
            {
                slug: 'self-esteem',
                name: 'Самооценка'
            },
            {
                slug: 'adaptation',
                name: 'Адаптация'
            }
        ],
        type: 'article',
        durationMinutes: 7,
        contentWarning: null,
        ...editorialMeta,
        reviewedAt: '2026-10-16T00:00:00Z',
        safeNextStep: 'Запишите один собственный результат, который стал лучше по сравнению с вашей прошлой точкой.',
        body: `Сравнение с другими происходит автоматически, особенно когда виден чужой результат, но не виден путь к нему.

## Более полезная точка сравнения

Попробуйте сравнивать текущий результат не с чужим, а с собственной точкой старта.

Отдельно отметьте:

- что уже получилось;
- чему вы научились;
- какой следующий шаг реалистичен.`,
        sources: []
    },
    {
        slug: 'new-city-adaptation',
        title: 'Первые недели в новом городе и университете: как дать себе время на адаптацию, когда всё вокруг непривычно и требует слишком много решений',
        summary: 'Что может помочь, когда вокруг слишком много нового: люди, расписание, пространство и необходимость быстро принимать решения.',
        imageUrl: '/psychoeducation/adaptation.svg',
        category: {
            slug: 'study',
            name: 'Учёба'
        },
        tags: [
            {
                slug: 'adaptation',
                name: 'Адаптация'
            },
            {
                slug: 'study',
                name: 'Учёба'
            },
            {
                slug: 'anxiety',
                name: 'Тревога'
            }
        ],
        type: 'article',
        durationMinutes: 6,
        contentWarning: null,
        ...editorialMeta,
        reviewedAt: '2026-10-14T00:00:00Z',
        safeNextStep: 'Выберите одну повторяющуюся опору: знакомый маршрут, место для учёбы или регулярный контакт.',
        body: `Адаптация требует времени. В первые недели полезно создавать несколько повторяющихся опор.

## Что может стать опорой

- привычный маршрут;
- понятное место для учёбы;
- регулярное время еды;
- один или два повторяющихся контакта.

Необязательно сразу чувствовать себя «на своём месте». Знакомство с новой средой происходит постепенно.`,
        sources: []
    }
];
const unique = (items)=>Array.from(new Map(items.map((item)=>[
            item.slug,
            item
        ])).values());
const psychoeducationFilterOptions = {
    types: [
        'article'
    ],
    categories: unique(psychoeducationMaterials.map((item)=>item.category)),
    tags: unique(psychoeducationMaterials.flatMap((item)=>item.tags))
};
}),
];})()

//# sourceMappingURL=src_modules_education_0ryuf6exnm8k6._.js.map