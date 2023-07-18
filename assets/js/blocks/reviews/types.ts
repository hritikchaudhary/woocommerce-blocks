export interface EditorContainerBlockProps {
	attributes: {
		categoryIds: number;
		productId: number;
		reviewsOnPageLoad: boolean;
		showProductName: boolean;
		showReviewDate: boolean;
		showReviewerName: boolean;
		showReviewContent: boolean;
		showReviewImage: boolean;
		showReviewRating: boolean;
		showOrderby: boolean;
		orderby: 'most-recent' | 'highest-rating' | 'lowest-rating';
		showLoadMore: boolean;
	};
	icon: JSX.Element;
	name: string;
	noReviewsPlaceholder: React.ElementType;
}
