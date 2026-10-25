module.exports = [
(()=>{"use strict";return[
"[project]/src/app/(public)/psychoeducation/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$education$2f$components$2f$ArticleView$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/education/components/ArticleView.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$education$2f$components$2f$PsychoeducationSidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/education/components/PsychoeducationSidebar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$education$2f$mock$2f$materials$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/education/mock/materials.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function Page({ params }) {
    const { slug } = await params;
    const material = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$education$2f$mock$2f$materials$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["psychoeducationMaterials"].find((item)=>item.slug === slug);
    if (!material) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "psychoShell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$education$2f$components$2f$PsychoeducationSidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PsychoeducationSidebar"], {}, void 0, false, {
                fileName: "[project]/src/app/(public)/psychoeducation/[slug]/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "psychoMain articleMain",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "publicTopbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "topbarSection",
                                        children: "Психопросвет"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/psychoeducation/[slug]/page.tsx",
                                        lineNumber: 21,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "topbarHint",
                                        children: "Проверенный открытый материал"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/psychoeducation/[slug]/page.tsx",
                                        lineNumber: 22,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/psychoeducation/[slug]/page.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "guestBadge",
                                "aria-label": "Текущий режим: гость",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "guestAvatar",
                                        "aria-hidden": "true",
                                        children: "Г"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/psychoeducation/[slug]/page.tsx",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Гость"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/psychoeducation/[slug]/page.tsx",
                                        lineNumber: 26,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/psychoeducation/[slug]/page.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/psychoeducation/[slug]/page.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$education$2f$components$2f$ArticleView$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ArticleView"], {
                        material: material
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/psychoeducation/[slug]/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/psychoeducation/[slug]/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(public)/psychoeducation/[slug]/page.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/modules/education/components/ArticleContent.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArticleContent",
    ()=>ArticleContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function isSafeHref(href) {
    return href.startsWith('/') || href.startsWith('#') || /^https?:\/\//i.test(href) || /^mailto:/i.test(href);
}
function renderInline(text) {
    const tokenPattern = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g;
    const parts = text.split(tokenPattern).filter(Boolean);
    return parts.map((part, index)=>{
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
            const [, label, href] = link;
            if (!isSafeHref(href)) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: label
                }, index, false, {
                    fileName: "[project]/src/modules/education/components/ArticleContent.tsx",
                    lineNumber: 24,
                    columnNumber: 16
                }, this);
            }
            const external = /^https?:\/\//i.test(href);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: href,
                target: external ? '_blank' : undefined,
                rel: external ? 'noreferrer' : undefined,
                children: label
            }, index, false, {
                fileName: "[project]/src/modules/education/components/ArticleContent.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this);
        }
        if (part.startsWith('**') && part.endsWith('**')) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: part.slice(2, -2)
            }, index, false, {
                fileName: "[project]/src/modules/education/components/ArticleContent.tsx",
                lineNumber: 36,
                columnNumber: 14
            }, this);
        }
        if (part.startsWith('`') && part.endsWith('`')) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                children: part.slice(1, -1)
            }, index, false, {
                fileName: "[project]/src/modules/education/components/ArticleContent.tsx",
                lineNumber: 40,
                columnNumber: 14
            }, this);
        }
        if (part.startsWith('*') && part.endsWith('*')) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                children: part.slice(1, -1)
            }, index, false, {
                fileName: "[project]/src/modules/education/components/ArticleContent.tsx",
                lineNumber: 44,
                columnNumber: 14
            }, this);
        }
        return part;
    });
}
function parseMarkdown(body) {
    const lines = body.replace(/\r\n/g, '\n').split('\n');
    const blocks = [];
    let index = 0;
    while(index < lines.length){
        const line = lines[index];
        if (!line.trim()) {
            index += 1;
            continue;
        }
        if (line.trim().startsWith('```')) {
            const code = [];
            index += 1;
            while(index < lines.length && !lines[index].trim().startsWith('```')){
                code.push(lines[index]);
                index += 1;
            }
            if (index < lines.length) index += 1;
            blocks.push({
                type: 'code',
                text: code.join('\n')
            });
            continue;
        }
        const heading = line.match(/^(#{1,6})\s+(.+)$/);
        if (heading) {
            blocks.push({
                type: 'heading',
                level: heading[1].length,
                text: heading[2]
            });
            index += 1;
            continue;
        }
        if (/^>\s?/.test(line)) {
            const quote = [];
            while(index < lines.length && /^>\s?/.test(lines[index])){
                quote.push(lines[index].replace(/^>\s?/, ''));
                index += 1;
            }
            blocks.push({
                type: 'blockquote',
                text: quote.join(' ')
            });
            continue;
        }
        if (/^[-*+]\s+/.test(line)) {
            const items = [];
            while(index < lines.length && /^[-*+]\s+/.test(lines[index])){
                items.push(lines[index].replace(/^[-*+]\s+/, ''));
                index += 1;
            }
            blocks.push({
                type: 'unordered-list',
                items
            });
            continue;
        }
        if (/^\d+\.\s+/.test(line)) {
            const items = [];
            while(index < lines.length && /^\d+\.\s+/.test(lines[index])){
                items.push(lines[index].replace(/^\d+\.\s+/, ''));
                index += 1;
            }
            blocks.push({
                type: 'ordered-list',
                items
            });
            continue;
        }
        const paragraph = [
            line.trim()
        ];
        index += 1;
        while(index < lines.length && lines[index].trim() && !/^(#{1,6})\s+/.test(lines[index]) && !/^>\s?/.test(lines[index]) && !/^[-*+]\s+/.test(lines[index]) && !/^\d+\.\s+/.test(lines[index]) && !lines[index].trim().startsWith('```')){
            paragraph.push(lines[index].trim());
            index += 1;
        }
        blocks.push({
            type: 'paragraph',
            text: paragraph.join(' ')
        });
    }
    return blocks;
}
function ArticleContent({ body }) {
    const blocks = parseMarkdown(body);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "articleBody",
        children: blocks.map((block, index)=>{
            if (block.type === 'heading') {
                if (block.level <= 2) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: renderInline(block.text)
                }, index, false, {
                    fileName: "[project]/src/modules/education/components/ArticleContent.tsx",
                    lineNumber: 140,
                    columnNumber: 40
                }, this);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: renderInline(block.text)
                }, index, false, {
                    fileName: "[project]/src/modules/education/components/ArticleContent.tsx",
                    lineNumber: 141,
                    columnNumber: 18
                }, this);
            }
            if (block.type === 'unordered-list') {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    children: block.items.map((item, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: renderInline(item)
                        }, itemIndex, false, {
                            fileName: "[project]/src/modules/education/components/ArticleContent.tsx",
                            lineNumber: 145,
                            columnNumber: 72
                        }, this))
                }, index, false, {
                    fileName: "[project]/src/modules/education/components/ArticleContent.tsx",
                    lineNumber: 145,
                    columnNumber: 18
                }, this);
            }
            if (block.type === 'ordered-list') {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                    children: block.items.map((item, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: renderInline(item)
                        }, itemIndex, false, {
                            fileName: "[project]/src/modules/education/components/ArticleContent.tsx",
                            lineNumber: 149,
                            columnNumber: 72
                        }, this))
                }, index, false, {
                    fileName: "[project]/src/modules/education/components/ArticleContent.tsx",
                    lineNumber: 149,
                    columnNumber: 18
                }, this);
            }
            if (block.type === 'blockquote') {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: renderInline(block.text)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/education/components/ArticleContent.tsx",
                        lineNumber: 153,
                        columnNumber: 42
                    }, this)
                }, index, false, {
                    fileName: "[project]/src/modules/education/components/ArticleContent.tsx",
                    lineNumber: 153,
                    columnNumber: 18
                }, this);
            }
            if (block.type === 'code') {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        children: block.text
                    }, void 0, false, {
                        fileName: "[project]/src/modules/education/components/ArticleContent.tsx",
                        lineNumber: 157,
                        columnNumber: 35
                    }, this)
                }, index, false, {
                    fileName: "[project]/src/modules/education/components/ArticleContent.tsx",
                    lineNumber: 157,
                    columnNumber: 18
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: renderInline(block.text)
            }, index, false, {
                fileName: "[project]/src/modules/education/components/ArticleContent.tsx",
                lineNumber: 160,
                columnNumber: 16
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/modules/education/components/ArticleContent.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/modules/education/components/ArticleView.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArticleView",
    ()=>ArticleView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$education$2f$lib$2f$contentType$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/education/lib/contentType.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$education$2f$components$2f$ArticleContent$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/education/components/ArticleContent.tsx [app-rsc] (ecmascript)");
;
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
function ArticleView({ material }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "article",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                className: "backLink",
                href: "/psychoeducation",
                children: "← Назад в психопросвет"
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "articleHeader",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "materialMeta",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$education$2f$lib$2f$contentType$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contentTypeLabels"][material.type]
                            }, void 0, false, {
                                fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    material.durationMinutes,
                                    " мин чтения"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: material.title
                    }, void 0, false, {
                        fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "articleLead",
                        children: material.summary
                    }, void 0, false, {
                        fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tagList",
                        "aria-label": "Теги материала",
                        children: material.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "tag",
                                children: tag.name
                            }, tag.slug, false, {
                                fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                className: "articleReviewMeta",
                "aria-label": "Редакционная информация",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                children: "Автор"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                children: material.author
                            }, void 0, false, {
                                fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                children: "Рецензент"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                children: material.reviewer
                            }, void 0, false, {
                                fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                children: "Дата пересмотра"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                children: formatReviewedAt(material.reviewedAt)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `articleCover ${material.imageUrl ? '' : 'isPlaceholder'}`,
                children: material.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: material.imageUrl,
                    alt: `Обложка материала «${material.title}»`
                }, void 0, false, {
                    fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "coverPlaceholder",
                    role: "img",
                    "aria-label": "У материала нет обложки",
                    children: "Психопросвет"
                }, void 0, false, {
                    fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            material.contentWarning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "contentWarning",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Обратите внимание"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: material.contentWarning
                    }, void 0, false, {
                        fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$education$2f$components$2f$ArticleContent$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ArticleContent"], {
                body: material.body
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            material.sources.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sources",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Источники"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: material.sources.map((source)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: source.url,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: source.title
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                                    lineNumber: 72,
                                    columnNumber: 17
                                }, this)
                            }, source.url, false, {
                                fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                                lineNumber: 71,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/education/components/ArticleView.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/education/components/ArticleView.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/modules/education/components/PsychoeducationSidebar.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PsychoeducationSidebar",
    ()=>PsychoeducationSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
function HouseIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.5 9.2 10 4.8l5.5 4.4v6.3H4.5V9.2Z",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 15.5v-3.6h4v3.6",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
function FocusIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "10",
                cy: "10",
                r: "5.8",
                stroke: "currentColor",
                strokeWidth: "1.6"
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "10",
                cy: "10",
                r: "1.8",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
function HeartIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M10 15.6 4.6 10.4a3.5 3.5 0 0 1 4.9-5.1L10 5.8l.5-.5a3.5 3.5 0 0 1 4.9 5.1L10 15.6Z",
            stroke: "currentColor",
            strokeWidth: "1.6",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
function DotIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "10",
            cy: "10",
            r: "2.2",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function HelpIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "10",
                cy: "10",
                r: "6.1",
                stroke: "currentColor",
                strokeWidth: "1.6"
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "10",
                cy: "10",
                r: "3.2",
                stroke: "currentColor",
                strokeWidth: "1.6"
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "10",
                cy: "10",
                r: "1.2",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
function GridIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4.2",
                y: "4.2",
                width: "11.6",
                height: "11.6",
                stroke: "currentColor",
                strokeWidth: "1.4"
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 4.4v11.2M12 4.4v11.2M4.4 8h11.2M4.4 12h11.2",
                stroke: "currentColor",
                strokeWidth: "1.2"
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
function DiamondIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M10 3.9 16.1 10 10 16.1 3.9 10 10 3.9Z",
            stroke: "currentColor",
            strokeWidth: "1.6",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
const links = [
    {
        href: '/',
        label: 'Главная',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(HouseIcon, {}, void 0, false, {
            fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
            lineNumber: 72,
            columnNumber: 40
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        href: '/focus',
        label: 'Разобраться',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(FocusIcon, {}, void 0, false, {
            fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
            lineNumber: 73,
            columnNumber: 49
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        href: '/wall',
        label: 'Накопилось',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(HeartIcon, {}, void 0, false, {
            fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
            lineNumber: 74,
            columnNumber: 47
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        href: '/practices',
        label: 'Практики',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(DotIcon, {}, void 0, false, {
            fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
            lineNumber: 75,
            columnNumber: 50
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        href: '/appointments',
        label: 'Помощь',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(HelpIcon, {}, void 0, false, {
            fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
            lineNumber: 76,
            columnNumber: 51
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        href: '/psychoeducation',
        label: 'Психопросвет',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(GridIcon, {}, void 0, false, {
            fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
            lineNumber: 77,
            columnNumber: 60
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        href: '/events',
        label: 'События',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(DiamondIcon, {}, void 0, false, {
            fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
            lineNumber: 78,
            columnNumber: 46
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function PsychoeducationSidebar({ activeHref = '/psychoeducation' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "psychoSidebar",
        "aria-label": "Основная навигация",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                className: "psychoBrand",
                href: "/",
                "aria-label": "Рядом — на главную",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "brandMark",
                        "aria-hidden": "true",
                        children: "Р"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "brandText",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Рядом"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "платформа СПбГУ"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "psychoNav",
                children: links.map(({ href, label, icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: href,
                        className: `psychoNavLink ${href === activeHref ? 'isActive' : ''}`,
                        "aria-current": href === activeHref ? 'page' : undefined,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "navIcon",
                                "aria-hidden": "true",
                                children: icon
                            }, void 0, false, {
                                fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this)
                        ]
                    }, href, true, {
                        fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sidebarBottom",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    className: "psychoCrisisLink",
                    href: "/crisis",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "crisisDot",
                            "aria-hidden": "true",
                            children: "!"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Нужна срочная помощь"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/education/components/PsychoeducationSidebar.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/modules/education/lib/contentType.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/modules/education/mock/materials.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
]})(),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/(public)/psychoeducation/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(public)/psychoeducation/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1n11ql73gewr5._.js.map