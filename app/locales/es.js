const es = 	{
	// this variables mainly used in navigation section
	about: "Acerca de",
	explore: "Explorar",
	whitepaper: "Whitepaper",
	buy_steem: "Comprar Steem",
	sell_steem: "Vender Steem",
	market: "Mercado",
	currency_market: "Mercado de Divisas",
	stolen_account_recovery: "Recuperación de Cuentas Robadas",
	change_account_password: "Cambiar Contraseña",
	steemit_chat: "Chat de Steemit",
	steemit_api_docs: "Steemit API Docs",
	witnesses: "Testigos",
	vote_for_witnesses: "Votar por Testigos",
	privacy_policy: "Política de Privacidad",
	terms_of_service: "Terminos de Servicio",
	sign_up: "Sign Up",
	/* end navigation */
	buy: 'Comprar',
	sell: 'Vender',
	buy_steem_power: 'Compra Steem Power',
	transaction_history: 'Historial de Transacciones',
	submit_a_story: 'Escribir Post',
	nothing_yet: 'Aun Nada',
	close: 'Cerrar',
	post_promo_text: "Authors get paid when people like you upvote their post \n If you enjoyed what you read here, earn ${amount} of Steem Power \n when you {link} and vote for it.",
	read_only_mode: 'Due to server maintenance we are running in read only mode. We are sorry for the inconvenience.',
	membership_invitation_only: 'Membership to Steemit.com is now under invitation only because of unexpectedly high sign up rate.',
	submit_email_to_get_on_waiting_list: 'Submit your email to get on the waiting list',
	login: 'Entrar',
	logout: 'Salir',
	show_less_low_value_posts: "Show fewer low value posts",
	show_more_low_value_posts: "Show more low value posts",
	select_topic: 'Seleccionar Tópicos',
	tags_and_topics: "Tags y Tópicos",
	filter: "Filtros",
	show_more_topics: "Mostrar más tópicos",
	we_require_social_account: 'Steemit funds each account with over {signup_bonus} worth of Steem Power; to prevent abuse, we require new users to login via social media.',
	personal_info_will_be_private: 'Your personal information will be kept',
	personal_info_will_be_private_link: 'Privado',
	continue_with_facebook: 'Continuar con Facebook',
	continue_with_reddit: 'Continuar con Reddit',
	requires_positive_karma: 'requires positive Reddit comment karma',
	dont_have_facebook: 'Don\'t have a Facebook or Reddit account?',
	subscribe_to_get_sms_confirm: 'Subscribe to get a notification when SMS confirmation is available',
	by_verifying_you_agree: 'By verifying your account you agree to the Steemit',
	by_verifying_you_agree_terms_and_conditions: 'Terminos y Condiciones',
	terms_and_conditions: 'Terminos y Condiciones',
	// this is from top-right dropdown menu
	hot: 'caliente',
	trending: 'trending',
	payout_time: 'tiempo de pago',
	active: 'activo',
	responses: 'respuesta',
	popular: 'popular',
	/* end dropdown menu */
	loading: 'Cargando',
	cryptography_test_failed: 'Prueba criptografica fallida',
	unable_to_log_you_in: 'We will be unable to log you in with this browser',
	latest_browsers_do_work: 'The latest versions of {chromeLink} and {mozillaLink} are well tested and known to work with steemit.com.',
	account_creation_succes: 'Your account has been successfully created!',
	account_recovery_succes: 'Your account has been successfully recovered!',
	password_update_succes: 'The password for {accountName} was successfully updated',
	password_is_bound_to_account: "This password is bound to your account\'s owner key and can not be used to login to this site. \nHowever, you can use it to {changePasswordLink} to obtain a more secure set of keys.",
	update_your_password: 'actualiza tu contraseña',
	enter_username: 'Ingresa tu nombre de usuario',
	password_or_wif: 'Contraseña o WIF',
	requires_auth_key: 'This operation requires your {authType} key (or use your master password)',
	keep_me_logged_in: 'Mantenme firmado',
	// this are used mainly in "submit a story" form
	title: "Título",
	write_your_story: 'Escribe tu historia',
	editor: 'Editor',
	reply: 'Responder',
	edit: 'Editar',
	delete: 'Borrar',
	cancel: 'Cancelar',
	clear: 'Limpiar',
	save: 'Guardar',
	upvote_post: 'Vota la publicación',
	update_post: 'Actualiza la publicación',
	markdown_is_supported: 'Estilos y Markdown es soportado',
	preview: 'Vista Previa',
	// TODO do not forget to implment REQUIRED error in reply Editor
	markdown_not_supported: 'Markdown no esta soportado aquí',
	// markdown: 'Markdown', // this will probably be removed
	welcome_to_the_blockchain: 'Bienvenidos al Blockchain!',
	your_voice_is_worth_something: 'Tu voz vale algo',
	learn_more: 'Aprende más',
	get_sp_when_sign_up: 'Get {signupBonus} of Steem Power when you sign up today.',
	all_accounts_refunded: 'All Recovered Accounts have been fully Refunded',
	steemit_is_now_open_source: 'Steemit.com es ahora Software Libre',
	// this is mainly from ReplyEditor
	tag_your_story: 'Tag (up to 5 tags), the first tag is your main category.',
	select_a_tag: 'Selecciona una etiqueta',
	required: 'Requerido',
	shorten_title: 'Acortar título!',
	exceeds_maximum_length: 'Excede el máximo de ({maxKb}KB)',
	including_the_category: "(incluyendo la categoria '{rootCategory}')",
	use_limited_amount_of_tags: 'Tienes etiqueta {tagsLength} total{includingCategory}.  Por favor usa solo 5 en tu publicación y linea de categoría.',
	// this is mainly used in CategorySelector
	use_limitied_amount_of_categories: 'Por favor solo usa {amount} categorías',
	use_one_dash: 'Solo usa un guión',
	use_spaces_to_separate_tags: 'Usa espacios para separar las etiquetas',
	use_only_allowed_characters: 'Usa solo minusculas, digitos o un guión',
	must_start_with_a_letter: 'Debe iniciar con una letra',
	must_end_with_a_letter_or_number: 'Debe iniciar con una letra o número',
	// tags page
	tag: 'Etiqueta',
	replies: 'Respuestas',
	payouts: 'Pagos',
	need_password_or_key: 'Tu necesitas una contraseña privada o llave (no la llave pública)',
	// BlocktradesDeposit
	change_deposit_address: 'Cambia la dirección de depósito',
	get_deposit_address: 'Obtener la dirección de depósito',
	// for example 'powered by Blocktrades'
	powered_by: 'Funcionando gracias a',
	send_amount_of_coins_to: 'Enviar {value} {coinName} a',
	amount_is_in_form: 'Cantidad en formato 99999.999',
	insufficent_funds: 'Fondos insuficientes',
	update_estimate: 'Actualizar estimación',
	get_estimate: 'Obtener estimaciones',
	memo: 'Memo',
	must_include_memo: 'You must include the memo above',
	estimate_using: 'Estimar usando',
	amount_to_send: 'Cantidad para enviar {estimateInputCoin}',
	deposit_using: 'Deposit using', // example: 'deposit using Steem Power' // TODO: is this example right?
	suggested_limit: 'Suggested limit {depositLimit}',
	internal_server_error: 'Internal Server Error',
	enter_amount: 'Ingresar Cantidad',
	processing: 'Procesando',
	broadcasted: 'Transmitido',
	confirmed: 'Confirmado',
	remove: 'Eliminar',
	collapse_or_expand: "Colapsar/Expandir",
	reveal_comment: 'Revelar comentario',
	are_you_sure: 'Esta seguro?',
	// PostFull.jsx
	by: 'por',
	in: 'dentro',
	share: 'Compartir',
	in_reply_to: 'en respuesta a',
	replied_to: 'respondido a',
	transfer_amount_to_steem_power: "Transfer {amount} to STEEM POWER",
	transfer_amount_steem_power_to: "Transfer {amount} STEEM POWER to",
	recieve_amount_steem_power_from: "Receive {amount} STEEM POWER from",
	transfer_amount_steem_power_from_to: "Transfer {amount} STEEM POWER from {from} to",
	transfer_amount_to: "Transferir {amount} a",
	recieve_amount_from: "Recibir {amount} de",
	transfer_amount_from: "Transferir {amount} de",
	stop_power_down: "Stop power down",
	start_power_down_of: "Start power down of",
	curation_reward_of_steem_power_for: 'Curation reward of {reward} STEEM POWER for',
	author_reward_of_steem_power_for: 'Author reward of {payout} and {reward} STEEM POWER for',
	recieve_interest_of: 'Receive interest of {interest}',
	// TODO find where this is used and write an example
	to: 'to',
	account_not_found: 'Cuenta no encontrada',
	this_is_wrong_password: 'Esta contraseña es incorrecta',
	do_you_need_to: 'Do you need to',
	recover_your_account: 'recover your account', // this probably will end with question mark
	reset_usernames_password: "Reset {username}\'s Password",
	this_will_update_usernames_authtype_key: 'This will update {username} {authType} key',
	the_rules_of_steemit: "The first rule of Steemit is: Do not lose your password.<br /> The second rule of Steemit is: Do <strong>not</strong> lose your password.<br /> The third rule of Steemit is: We cannot recover your password.<br /> The fourth rule: If you can remember the password, it&apos;s not secure.<br /> The fifth rule: Use only randomly-generated passwords.<br /> The sixth rule: Do not tell anyone your password.<br /> The seventh rule: Always back up your password.",
	account_name: 'Nombre de la cuenta',
	recover_password: 'Recuperar cuenta',
	current_password: 'Contraseña actual',
	recent_password: 'Contraseña reciente',
	generated_password: 'Contraseña generada',
	recover_account: 'Recuperar cuenta',
	new: 'new', // ex. 'Generated Password (new)', but not exclusively
	backup_password_by_storing_it: 'Back it up by storing in your password manager or a text file',
	click_to_generate_password: 'Click to generate password',
	re_enter_generate_password: 'Re-enter Generated Password',
	understand_that_steemit_cannot_recover_password: 'I understand that Steemit cannot recover lost passwords',
	i_saved_password: 'I have securely saved my generated password',
	update_password: 'Actualizar contraseña',
	password_must_be_characters_or_more: 'Password must be {amount} characters or more',
	passwords_do_not_match: 'Passwords do not match',
	you_need_private_password_or_key_not_a_public_key: 'You need a private password or key (not a public key)',
	account_updated: 'Cuenta actualizada',
	warning: 'aviso',
	your_password_permissions_were_reduced: 'Your password permissions were reduced',
	if_you_did_not_make_this_change: 'If you did not make this change please',
	owhership_changed_on: 'Ownership Changed On',
	deadline_for_recovery_is: 'Deadline for recovery is',
	i_understand_dont_show_again: "I understand, don't show me again",
	ok: 'Ok',
	convert_to_steem: 'Convertir a Steem',
	steem_dollars_will_be_unavailable: 'This action will take place 3.5 days from now and can not be canceled. These Steem Dollars will immediately become unavailable',
	amount: 'Cantidad',
	steem_dollars: 'STEEM DOLLARS',
	convert: 'Convertir',
	invalid_amount: 'Invalid amount',
	insufficent_balance: 'Balance insuficiente',
	in_week_convert_steem_dollars_to_steem: 'In 3.5 days, convert {amount} STEEM DOLLARS into STEEM',
	order_placed: 'Order placed', // ex.: "Order placed: Sell {someamount_to_sell} for atleast {min_to_receive}"
	follow: 'Seguir',
	unfollow: 'No seguir',
	mute: 'Silenciar',
	unmute: 'Activar',
	confirm_password: 'Confirmar contraseña',
	login_to_see_memo: 'login to see memo',
	post: 'Post', // places used: tooltip in MediumEditor
	unknown: 'Unknown', // exp.: 'unknown error'
	account_name_is_not_available: 'Account name is not available',
	type: 'Tipo',
	price: 'Precio',
	// Market.jsx
	last_price: 'Último precio',
	'24h_volume': 'volumen de 24h',
	bid: 'Bid',
	ask: 'Ask',
	spread: 'Spread',
	total: 'Total',
	available: 'Disponible',
	lowest_ask: 'Lowest ask',
	highest_bid: 'Highest bid',
	buy_orders: 'Ordenes de compra',
	sell_orders: 'Ordenes de venta',
	trade_history: 'Trade History',
	open_orders: 'Ordenes abiertas',
	sell_amount_for_atleast: 'Sell {amount_to_sell} for at least {min_to_receive} ({effectivePrice})',
	buy_atleast_amount_for: 'Buy at least {min_to_receive} for {amount_to_sell} ({effectivePrice})',
	price_warning_above: 'This price is well above the current market price of {marketPrice}, are you sure?', //FIXME
	price_warning_below: 'This price is well below the current market price of {marketPrice}, are you sure?', //FIXME
	order_cancel_confirm: 'Cancel order {order_id} from {user}?', //FIXME
	order_cancelled: 'Order {order_id} cancelled.', //FIXME
	higher: 'Más alto', // context is about prices
	lower: 'Más bajo', // context is about prices
	total_sd_dollars: "Total SD ($)",
	sd_dollars: "SD ($)",
	// RecoverAccountStep1.jsx // recover account stuff
	not_valid: 'No valido',
	account_name_is_not_found: 'Account name is not found',
	unable_to_recover_account_not_change_ownership_recently: 'We are unable to recover this account, it has not changed ownership recently.',
	password_not_used_in_last_days: 'This password was not used on this account in the last 30 days.',
	request_already_submitted_contact_support: 'Your request has been already submitted and we are working on it. Please contact support@steemit.com for the status of your request.',
	recover_account_intro: "From time to time, a Steemian’s owner key may be compromised. Stolen Account Recovery gives the rightful account owner 30 days to recover their account from the moment the thief changed their owner key. Stolen Account Recovery can only be used on steemit.com if the account owner had perviously listed ‘Steemit’ as their account trustee and complied with Steemit’s Terms of Service.",
	login_with_facebook_or_reddit_media_to_verify_identity: 'Please login with Facebook or Reddit to verify your identity',
	login_with_social_media_to_verify_identity: 'Please login with {show_social_login} to verify you identity',
	enter_email_toverify_identity: 'We need to verify your identity. Please enter your email address below to begin the verification.',
	email: 'Correo electrónico',
	continue_with_email: "Continuar con correo",
	thanks_for_submitting_request_for_account_recovery: '<p>Thanks for submitting your request for Account Recovery using Steem’s blockchain-based multi factor authentication.</p> <p>We will respond to you as quickly as possible, however, please expect there may be some delay in response due to high volume of emails.</p> <p>Please be prepared to verify your identity.</p> <p>Regards,</p> <p>Ned Scott</p> <p>CEO Steemit</p>',
	recovering_account: 'Recuperar cuenta',
	checking_account_owner: 'Revisando el dueño de la cuenta',
	sending_recovery_request: 'Enviando petición de recuperación',
	cant_confirm_account_ownership: 'We can\'t confirm account ownership. Check your password',
	account_recovery_request_not_confirmed: "Account recovery request is not confirmed yet, please get back later, thank you for your patience.",
	vote: 'Votar',
	witness: 'Witness',
	top_witnesses: 'Mejores Witnesses',
	// user's navigational menu
	feed: 'Feed',
	wallet: 'Wallet',
	blog: 'Blog',
	change_password: 'Cambiar contraseña',
	// UserProfile
	unknown_account: 'Cuenta no conocida',
	user_hasnt_made_any_posts_yet: "Looks like {name} hasn't made any posts yet!",
	user_hasnt_started_bloggin_yet: "Looks like {name} hasn't started blogging yet!",
	user_hasnt_followed_anything_yet: "Looks like {name} hasn't followed anything yet!",
	user_hasnt_had_any_replies_yet: "{name} hasn't had any replies yet",
	users_blog: "Blog de {name}",
	users_posts: "Publicaciones de {name}",
	users_wallet: "Wallet de {name}",
	users_curation_rewards: "{name}'s curation rewards",
	users_author_rewards: "{name}'s author rewards",
	users_permissions: "{name}'s permissions",
	recent_replies_to_users_posts: "Recent replies to {name}'s posts",
	print: 'Imprimir',
	curation_rewards: "Recompensa para curadores",
	author_rewards: 'Recompensa para autores',
	feeds: 'Feeds',
	rewards: 'Recompensas',
	permissions: 'Permisos',
	password: 'Contraseña',
	posts: 'Publicación',
	// english language does not need plurals, but your language might need it
	// context usually is about profile stats: 'User has: 3 posts, 2 followers, 5 followed'
	post_count: `{postCount, plural,
		zero {0 posts}
		one {# post}
		few {# posts}
		many {# posts}
	}`,
	follower_count: `{followerCount, plural,
		=0 {no followers}
		one {1 follower}
		other {{followerCount} followers}
	}`,
	followed_count: `{followingCount, plural,
		=0 {not following anybody}
		one {1 following}
		other {{followingCount} following}
	}`,
	vote_count: `{voteCount, plural,
		zero {0 votes}
		one {# votes}
		few {# votes}
		many {# votes}
	}`,
	response_count: `{responseCount, plural,
		zero {0 responses}
		one {# responses}
		few {# responses}
		many {# responses}
	}`,
	reply_count: `{replyCount, plural,
		zero {0 replies}
		one {# replies}
		few {# replies}
		many {# replies}
	}`,
	this_is_users_reputations_score_it_is_based_on_history_of_votes: "This is ${name}'s reputation score.\n\nThe reputation score is based on the history of votes received by the account, and is used to hide low quality content.",
	newer: 'Más reciente',
	older: 'Más viejo',
	author_rewards_last_24_hours: 'Author rewards last 24 hours',
	daily_average_author_rewards: 'Daily average author rewards',
	author_rewards_history: 'Author Rewards History',
	balances: 'Balances',
	estimate_account_value: 'Valor estimado de la cuenta',
	next_power_down_is_scheduled_to_happen_at: 'The next power down is scheduled to happen',
	transfers_are_temporary_disabled: 'Transfers are temporary disabled',
	history: 'Historia',
	// CurationRewards.jsx
	curation_rewards_last_24_hours: 'Curation rewards last 24 hours',
	daily_average_curation_rewards: 'Daily average curation rewards',
	estimated_curation_rewards_last_week: "Estimated curation rewards last week",
	curation_rewards_last_week: "Curation rewards last week",
	curation_rewards_history: 'Curation Rewards History',
	// Post.jsx
	now_showing_comments_with_low_ratings: 'Now showing comments with low ratings',
	hide: 'Ocultar',
	show: 'Mostrar',
	sort_order: 'Alinear orden',
	comments_were_hidden_due_to_low_ratings: 'Comments were hidden due to low ratings',
	we_will_be_unable_to_create_account_with_this_browser: 'We will be unable to create your Steem account with this browser',
	you_need_to_logout_before_creating_account: 'You need to {logoutLink} before you can create another account',
	steemit_can_only_register_one_account_per_verified_user: 'Please note that Steemit can only register one account per verified user',
	username: 'Nombre de usuario',
	couldnt_create_account_server_returned_error: "Couldn't create account. Server returned the following error",
	form_requires_javascript_to_be_enabled: 'This form requires javascript to be enabled in your browser',
	our_records_indicate_you_already_have_account: 'Our records indicate that you already have steem account',
	to_prevent_abuse_steemit_can_only_register_one_account_per_user: 'In order to prevent abuse Steemit can only register one account per verified user.',
	you_can_either_login_or_send_us_email: 'You can either {loginLink} to your existing account or  if you need a new account',
	send_us_email: 'envianos correo electrónico',
	connection_lost_reconnecting: 'Conexión perdida, reconectando',
	// Voting.jsx
	stop_seeing_content_from_this_user: 'Stop seeing content from this user',
	flagging_post_can_remove_rewards_the_flag_should_be_used_for_the_following: 'Flagging a post can remove rewards and make this material less visible. The flag should be used for the following',
	fraud_or_plagiarism: 'Fraud or Plagiarism',
	hate_speech_or_internet_trolling: 'Hate Speech or Internet Trolling',
	intentional_miss_categorized_content_or_spam: 'Intentional miss-categorized content or Spam',
	downvote: 'Votar abajo',
	pending_payout: 'Pagos pendientes',
	past_payouts: 'Pagos pasados',
	and: 'y',
	more: 'más',
	remove_vote: 'Eliminar voto',
	upvote: 'Votar',
	we_will_reset_curation_rewards_for_this_post: 'will reset your curation rewards for this post',
	removing_your_vote: 'Removing your vote',
	changing_to_an_upvote: 'Changing to an Up-Vote',
	changing_to_a_downvote: 'Changing to a Down-Vote',
	confirm_flag: 'Confirm Flag',
	//  TODO
	date_created: 'Fecha Creada',
	search: 'Buscar',
	begin_recovery: "Iniciar recuperación",
	post_as: 'Publicar como', // 'Post as Misha'
	action: 'Acción',
	steem_app_center: 'Centro de Aplicaciones de Steem',
	witness_thread: 'witness thread',
	you_have_votes_remaining: 'You have {votesCount} votes remaining',
	you_can_vote_for_maximum_of_witnesses: 'You can vote for a maximum of 30 witnesses',
	set_witness_proxy: "You can also choose a proxy that will vote for witnesses for you. This will reset your current witness selection.", // FIXME
	witness_set: "You have set a voting proxy. If you would like to reenable manual voting, please clear your proxy.", // FIXME
	witness_proxy_current: "Your current proxy is", // FIXME
	witness_proxy_set: "Set proxy", // FIXME
	witness_proxy_clear: "Clear proxy", // FIXME
	information: 'Información',
	if_you_want_to_vote_outside_of_top_enter_account_name: 'If you would like to vote for a witness outside of the top 50, enter the account name below to cast a vote',
	view_the_direct_parent: 'Vista directa del padre',
	you_are_viewing_single_comments_thread_from: 'You are viewing a single comment&#39;s thread from',
	view_the_full_context: 'View the full context',
	this_is_a_price_feed_conversion: 'This is a price feed conversion. The 3.5 day delay is necessary to prevent abuse from gaming the price feed average',
	your_existing_SD_are_liquid_and_transferable: 'Your existing Steem Dollars are liquid and transferable.  Instead you may wish to trade Steem Dollars directly in this site under {link} or transfer to an external market.',
	buy_or_sell: 'Buy or Sells',
	trending_30_day: 'trending (30 day)',
	promoted: 'promoted',
	comments: 'Comments',
	topics: 'Topics',
	this_password_is_bound_to_your_accounts_private_key: 'This password is bound to your account\'s active key and can not be used to login to this page. You may use this active key on other more secure pages like the Wallet or Market pages.',
	potential_payout: 'Potential Payout',
	boost_payments: 'Boost Payments',
	authors: 'Authors',
	curators: 'Curators',
	date: 'Date',
	no_responses_yet_click_to_respond: 'No responses yet. Click to respond.',
	click_to_respond: 'Click to respond',
	new_password: 'New Password',
	paste_a_youtube_or_vimeo_and_press_enter: 'Paste a YouTube or Vimeo and press Enter',
	there_was_an_error_uploading_your_image: 'There was an error uploading your image',
	raw_html: 'Raw HTML',
	please_remove_following_html_elements: 'Please remove the following HTML elements from your post: ',
	reputation: "Reputation",
	remember_voting_and_posting_key: "Remember voting & posting key",
	// example usage: 'Autologin? yes/no'
	auto_login_question_mark: 'Auto login?',
	yes: 'Yes',
	no: 'No',
	hide_private_key: 'Hide private key',
	login_to_show: 'Login to show',
	steemit_cannot_recover_passwords_keep_this_page_in_a_secure_location: 'Steemit cannot recover passwords.  Keep this page in a secure location, such as a fireproof safe or safety deposit box.',
	steemit_password_backup: 'Steemit Password Backup',
	steemit_password_backup_required: 'Steemit Password Backup (required)',
	after_printing_write_down_your_user_name: 'After printing, write down your user name',
	public: 'Public',
	private: 'Private',
	public_something_key: 'Public {key} Key',
	private_something_key: 'Private {key} Key',
	posting_key_is_required_it_should_be_different: 'The posting key is used for posting and voting. It should be different from the active and owner keys.',
	the_active_key_is_used_to_make_transfers_and_place_orders: 'The active key is used to make transfers and place orders in the internal market.',
	the_owner_key_is_required_to_change_other_keys: 'The owner key is the master key for the account and is required to change the other keys.',
	the_private_key_or_password_should_be_kept_offline: 'The private key or password for the owner key should be kept offline as much as possible.',
	the_memo_key_is_used_to_create_and_read_memos: 'The memo key is used to create and read memos.',
	previous: 'Previous',
	next: 'Next',
	browse: 'Browse',
	not_valid_email: 'Not valid email',
	thank_you_for_being_an_early_visitor_to_steemit: 'Thank you for being an early visitor to Steemit. We will get back to you at the earliest possible opportunity.',
	estimated_author_rewards_last_week: "Estimated author rewards last week",
	author_rewards_last_week: "Author rewards last week",
	confirm: 'Confirm',
	canceled: 'Canceled',
	asset: "Asset",
	this_memo_is_private: 'This Memo is Private',
	this_memo_is_public: 'This Memo is Public',
	power_up: 'Power Up',
	transfer: 'Transfer',
	basic: 'Basic',
	advanced: 'Advanced',
	convert_to_steem_power: 'Convert to Steem Power',
	transfer_to_account: 'Transfer to Account',
	buy_steem_or_steem_power: 'Buy Steem or Steem Power',
	version: 'Version',
	about_steemit: 'About Steemit',
	steemit_is_a_social_media_platform_where_everyone_gets_paid_for_creating_and_curating_content: 'Steemit is a social media platform where <strong>everyone</strong>&nbsp;gets <strong>paid</strong> for creating and curating content',
	steemit_is_a_social_media_platform_where_everyone_gets_paid: 'Steemit is a social media platform where everyone gets paid for creating and curating content. It leverages a robust digital points system, called Steem, that supports real value for digital rewards through market price discovery and liquidity.',
	learn_more_at_steem_io: 'Learn more at steem.io',
	resources: 'Resources',
	steem_whitepaper: 'Steem Whitepaper',
	join_our_slack: 'Join our Slack',
	steemit_support: 'Steemit Support',
	please_email_questions_to: 'Please email your questions to',
	sorry_your_reddit_account_doesnt_have_enough_karma: "Sorry, your Reddit account doesn't have enough Reddit Karma to qualify for a free sign up. Please add your email for a place on the waiting list",
	register_with_facebook: 'Register with Facebook',
	or_click_the_button_below_to_register_with_facebook: 'Or click the button below to register with Facebook',
	trending_24_hour: 'trending (24 hour)',
	home: 'home',
	'24_hour': '24 hour',
	'30_day': '30 day',
	flag: "Flag",

}

export { es }
