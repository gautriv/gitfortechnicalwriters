function updateProgress(newProgress, elementId) {
    // Set the progress variable to the new progress
    let progress = newProgress;

    // Update the progress bar value and display the percentage
    $('.progress-bar').attr('aria-valuenow', progress).css('width', progress + '%').html('<span>You have completed ' + progress + '% of the course</span>');

    // Add a class to the progress bar for styling
    $('.progress-bar').addClass('progress-bar-animated');
}
