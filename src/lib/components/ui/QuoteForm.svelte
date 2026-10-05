<script>
	import { translations } from '$lib/i18n/translations';
	import { language } from '$lib/stores/language';
	import { EMAIL, FORM_ENDPOINT } from '$lib/site';

	$: t = translations[$language].quote;

	// '', 'sending', 'success', 'error', 'opened'
	let status = '';

	async function submit(event) {
		const form = event.currentTarget;
		const data = new FormData(form);

		if (!FORM_ENDPOINT) {
			const lines = [
				`${t.name}: ${data.get('name') || ''}`,
				`${t.email}: ${data.get('email') || ''}`,
				`${t.type}: ${data.get('type') || ''}`,
				`${t.direction}: ${t.directionValue}`,
				`${t.deadline} ${data.get('deadline') || ''}`,
				`${t.link}: ${data.get('link') || ''}`,
				'',
				data.get('message') || ''
			];
			const subject = `${t.mailSubject}${data.get('type') ? ': ' + data.get('type') : ''}`;
			window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
			status = 'opened';
			return;
		}

		status = 'sending';
		data.set('_subject', t.mailSubject);
		data.set('direction', t.directionValue);
		try {
			const res = await fetch(FORM_ENDPOINT, {
				method: 'POST',
				body: data,
				headers: { Accept: 'application/json' }
			});
			status = res.ok ? 'success' : 'error';
			if (res.ok) form.reset();
		} catch {
			status = 'error';
		}
	}
</script>

<form
	id="quote"
	class="grid gap-4 rounded-card bg-white p-6 text-theme-dark sm:p-[30px]"
	method="POST"
	action={FORM_ENDPOINT || `mailto:${EMAIL}`}
	enctype={FORM_ENDPOINT ? 'multipart/form-data' : 'text/plain'}
	on:submit|preventDefault={submit}
>
	<div class="grid gap-4 sm:grid-cols-2">
		<label class="field">
			{t.name}
			<input name="name" type="text" autocomplete="name" />
		</label>
		<label class="field">
			{t.email}
			<input name="email" type="email" autocomplete="email" />
		</label>
	</div>
	<div class="grid gap-4 sm:grid-cols-2">
		<label class="field">
			{t.type}
			<select name="type">
				<option value="">{t.choose}</option>
				{#each t.types as type}
					<option>{type}</option>
				{/each}
			</select>
		</label>
		<div class="field">
			{t.direction}
			<p class="mb-0 rounded-[10px] border-[1.5px] border-theme-line bg-theme-light px-4 py-[14px] font-sans text-base text-theme-dark">
				{t.directionValue}
			</p>
		</div>
	</div>
	<label class="field">
		{t.deadline}
		<input name="deadline" type="text" placeholder={t.deadlinePlaceholder} />
	</label>
	<label class="field">
		{t.link}
		<input name="link" type="text" inputmode="url" placeholder={t.linkPlaceholder} />
	</label>
	<label class="field">
		{t.message}
		<textarea name="message" placeholder={t.messagePlaceholder}></textarea>
	</label>
	<button type="submit" class="btn btn-primary w-full justify-center text-center leading-tight" disabled={status === 'sending'}>
		{status === 'sending' ? t.sending : t.submit}
	</button>
	<p class="mb-0 text-[0.88rem]">{FORM_ENDPOINT ? t.hintForm : t.hintMail}</p>
	{#if status === 'success'}
		<p class="mb-0 font-semibold text-theme-dark" role="status">{t.success}</p>
	{:else if status === 'error' || status === 'opened'}
		<p class="mb-0 font-semibold text-theme-dark" role="status">
			{status === 'error' ? t.error : t.opened}
			<a class="text-theme-accent underline" href="mailto:{EMAIL}">{EMAIL}</a>
		</p>
	{/if}
</form>
