package org.redquark.aem.learning.core.models.multifield;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;

/**
 * @author Anirudh Sharma
 *
 */
@Model(adaptables = Resource.class)
public class TabModel {

	// Inject the tabs node under the current node
	@Inject
	@Optional
	public Resource tabs;

	// No need of a post construct as we don't have anything to modify after the
	// model is constructed
}
