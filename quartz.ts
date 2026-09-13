import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import GitHubLink from "./quartz/components/GitHubLink"
import { PageTypeDispatcher } from "./quartz/plugins/pageTypes/dispatcher"

const config = await loadQuartzConfig()
const baseLayout = await loadQuartzLayout()
const repoLink = GitHubLink({
	url: "https://github.com/cghayden/bristol-ctf-club-wiki",
})

const appendRepoLink = (components = []) => [...components, repoLink]
const layout = {
	...baseLayout,
	defaults: {
		...baseLayout.defaults,
		left: appendRepoLink(baseLayout.defaults.left ?? []),
	},
	byPageType: Object.fromEntries(
		Object.entries(baseLayout.byPageType).map(([pageType, pageLayout]) => {
			if ((pageLayout.left ?? baseLayout.defaults.left ?? []).length === 0) {
				return [pageType, pageLayout]
			}

			return [
				pageType,
				{
					...pageLayout,
					left: appendRepoLink(pageLayout.left ?? baseLayout.defaults.left ?? []),
				},
			]
		}),
	),
}

config.plugins.emitters = [
	...config.plugins.emitters.filter((plugin) => plugin.name !== "PageTypeDispatcher"),
	PageTypeDispatcher({
		defaults: layout.defaults,
		byPageType: layout.byPageType,
	}),
]

export default config
